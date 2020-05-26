import { join, resolve, extname } from 'path'
import * as fs from 'fs'

export default class Storage {
  private readonly PROBLEM_LIST_FILE = resolve(
    join(__dirname, '..', '..', 'database', 'problem-list.json')
  )
  private readonly ACCEPTED_FILE = resolve(
    join(__dirname, '..', '..', 'database', 'accepted.json')
  )
  private readonly PROBLEMS_DIR = resolve(
    join(__dirname, '..', '..', '..', 'problems')
  )
  private readonly POST_TEMPLATES = [
    {
      entry: resolve(join(__dirname, '..', '..', 'database', 'template.org')),
      output: [resolve(join(__dirname, '..', '..', '..', 'README.org'))],
    },
    {
      entry: resolve(join(__dirname, '..', '..', 'database', 'template.md')),
      output: [
        resolve(
          join(__dirname, '..', '..', 'output', '2017-11-01-LeetCode-JS.md')
        ),
        resolve(join(__dirname, '..', '..', '..', 'README.md')),
      ],
    },
  ]

  private problems: Array<any> = []
  private exists: Array<any> = []

  constructor() {}

  private readJSONSync(path: string) {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  }
  private writeJSONSync(path: string, json: string) {
    return fs.writeFileSync(path, JSON.stringify(json), 'utf8')
  }
  private getAllProblems() {
    if (this.problems.length > 0) return

    const getFilename = (id: string, slug: string) =>
      (id + '').padStart(4, '0') + '-' + slug + '.js'

    const getFilePath = (filename: string) =>
      resolve(join(__dirname, '..', '..', '..', 'problems', filename))

    this.problems = this.readJSONSync(this.PROBLEM_LIST_FILE).map(
      (problem: any) => {
        problem.filename = getFilename(
          problem.stat.frontend_question_id,
          problem.stat.question__title_slug
        )
        problem.filePath = getFilePath(problem.filename)
        return problem
      }
    )
  }
  private getProblemId(filename: string) {
    return parseInt((<string[]>filename.match(/(\d*)-.*/))[1], 10)
  }
  private updateAccepted() {
    const accepted = this.readJSONSync(this.ACCEPTED_FILE)
    const files = fs
      .readdirSync(this.PROBLEMS_DIR)
      .filter((filename) => extname(filename) === '.js')
      .filter((filename) => !accepted.includes(this.getProblemId(filename)))

    for (let filename of files) {
      const filePath = join(this.PROBLEMS_DIR, filename)
      const content = fs.readFileSync(filePath, 'utf8')
      if (content.includes('// Submission Result: Accepted')) {
        accepted.push(this.getProblemId(filename))
      }
    }

    accepted.sort((a: number, b: number) => a - b)
    this.writeJSONSync(this.ACCEPTED_FILE, accepted)
  }

  getProblem(id: number, fromNoExist = false) {
    this.getAllProblems()

    let problem = null
    if (id) {
      problem = this.problems.find(
        (p: any) => p.stat.frontend_question_id === id
      )
      if (!problem) throw new Error('Do not have this problem.')
      if (fromNoExist && fs.existsSync(problem.filePath)) {
        throw new Error('File <' + problem.filename + '> already exists.')
      }
      if (problem.paid_only) throw new Error('This problem is LOCKED!')
    } else {
      // if id == 0 or NaN, get a random problem
      const exist = fs.readdirSync(this.PROBLEMS_DIR)
      const feasible = this.problems
        .filter((p) => !exist.includes(p.filename))
        .filter((p) => !p.paid_only)
      const random = Math.floor(Math.random() * feasible.length)
      problem = feasible[random]
    }

    return problem
  }
  getProblems(numbers: number[]) {
    this.getAllProblems()
    return this.problems.filter((problem) =>
      numbers.includes(problem.stat.frontend_question_id)
    )
  }
  getAccepted() {
    this.updateAccepted()
    return this.readJSONSync(this.ACCEPTED_FILE)
  }
  getPostTemplates() {
    return this.POST_TEMPLATES.map((t) => {
      return {
        ...t,
        content: fs.readFileSync(t.entry, 'utf8'),
      }
    })
  }
  getLatestProblems(length: number) {
    const problems = this.getProblems(this.getAccepted())
    const latest = problems.map((problem) => {
      problem.mtimeMs = fs.statSync(
        join(
          resolve(join(__dirname, '..', '..', '..', 'problems')),
          problem.filename
        )
      ).mtimeMs
      return problem
    })

    latest.sort((a, b) => b.mtimeMs - a.mtimeMs)
    return latest.slice(0, length)
  }


  saveProblemFile(path: string, data: string) {
    fs.writeFileSync(path, data, 'utf8')
  }
  saveList(json: string) {
    fs.writeFileSync(this.PROBLEM_LIST_FILE, json, {
      encoding: 'utf8',
      flag: 'w+',
    })
  }
  savePost(template: any) {
    for (let path of template.output) {
      fs.writeFileSync(path, template.content, { encoding: 'utf8', flag: 'w+' })
      console.log(`Generate <${path}> successed.`)
    }
  }
}
