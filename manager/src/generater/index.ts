import Request from '../request/index'
import Storage from '../storage/index'
import TemplateProcessor from './TemplateProcessor'

// problem difficulty type
const DIFFICULTY_TYPES = ['Easy', 'Medium', 'Hard']

import { join, resolve } from 'path'

// Github repository url
const REPOSITORY =
  'https://github.com/zhufuge/leetcode-js/blob/master/problems/'

// Generate file top information
function getMeta(problem: any) {
  const { stat } = problem
  const meta = [
    stat.frontend_question_id + '. ' + stat.question__title,
    DIFFICULTY_TYPES[problem.difficulty.level - 1] +
      '   ' +
      ((stat.total_acs / stat.total_submitted) * 100).toFixed() +
      '%',
  ]
  return meta.map((len) => '// ' + len + '\n').join('')
}

function unescape(str: string) {
  const unescapeMap: { [index: string]: string } = {
    '&nbsp;': ' ',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x60;': '`',
    '&#39;': "'",
  }
  for (let escaper in unescapeMap) {
    str = str.replace(new RegExp(escaper, 'g'), unescapeMap[escaper])
  }
  return str
}

function toText(html: string) {
  html = html.replace(/<[^>]+>/gm, '') // remove tags
  html = html.replace(/\r/gm, '') // remove \r
  html = html.replace(/\n+/gm, '\n') // remove surplus \n
  return html
}

// Split a line word less than 80 & add // at the head
function unfill(value: string) {
  if (value === '') return value
  return value
    .split(' ')
    .reduce(
      (lines, word, i) => {
        const tail = lines.length - 1
        if (lines[tail].length + word.length > 80) {
          lines[tail + 1] = '// ' + word
        } else {
          lines[tail] += (i ? ' ' : '// ') + word
        }
        return lines
      },
      ['']
    )
    .join('\n')
}

function getDescription(content: string) {
  content = toText(content)
  content = unescape(content)
  content = content.replace(/\n\s\n/gm, '\n\n')
  content = content.replace(/\t/g, '    ')
  content = content
    .split('\n')
    .map((s) => s.trimRight())
    .map(unfill)
    .join('\n')
  return content
}

function getDefaultCode(code: string) {
  return JSON.parse(code)
    .find((lang: any) => lang.value === 'javascript')
    .defaultCode.replace('\nvar ', '\nconst ')
    .replace('    ', '')
    .replace(/;$/, '')
}

function getTestCode(str: string) {
  const argv = str.replace(/"/g, "'").split('\n')
  const argvStr = argv.length > 1 ? argv.join(', ') : argv[0]
  return `;[\n  ${argvStr},\n].forEach(() => {\n\n})`
}

function getSolutionString() {
  return '// Solution:'
}

function getAcceptString() {
  return '// Submission Result: Accept'
}

export default class Generator {
  private readonly LATEST_LEN = 7
  private argv: string[]
  private request: Request
  private store: Storage
  constructor(argv: string[]) {
    this.argv = argv
    this.request = new Request()
    this.store = new Storage()
  }

  private async updateProblemList() {
    const json = await this.request.fetchProblemList()
    const problems = json['stat_status_pairs']
    this.store.saveList(JSON.stringify(problems, null, 2))
    console.log('Request problems total:', problems.length)
  }

  private async generateProblem(id: number) {
    const problem = this.store.getProblem(id, true)

    const res: any = await this.request.fetchProblem(
      problem.stat.question__title_slug
    )
    const detail = res.question

    const { content, codeDefinition, sampleTestCase } = detail
    const meta = getMeta(problem)
    const description = getDescription(content)
    const defaultCode = getDefaultCode(codeDefinition)
    const testCode = getTestCode(sampleTestCase)
    const solution = getSolutionString()
    const accept = getAcceptString()

    this.store.saveProblemFile(
      problem.filePath,
      [meta, description, defaultCode, testCode, solution, accept].join('\n\n')
    )
    console.log(`Generate File: <${problem.filename}>.`)
  }

  private generatePost() {
    const accepted = this.store.getAccepted()
    const problems = this.store.getProblems(accepted).reverse()
    const latestProblems = this.store.getLatestProblems(this.LATEST_LEN)
    const templates = this.store.getPostTemplates()

    const processor = new TemplateProcessor()
    for (let template of templates) {
      let { content } = template
      content = processor.processLatest(content, latestProblems)
      content = processor.process(
        content,
        'accepted_len',
        String(accepted.length)
      )
      content = processor.processTable(content, problems)
      template.content = content
      this.store.savePost(template)
    }
  }

  run() {
    switch (this.argv[2]) {
      case 'ul':
        this.updateProblemList()
        break
      case 'try':
        this.generateProblem(Number.parseInt(this.argv[3]))
        break
      default:
        this.generatePost()
    }
  }
}
