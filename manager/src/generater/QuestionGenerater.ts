export default class QuestionGenerater {
  private readonly DIFFICULTY_TYPES = ['Easy', 'Medium', 'Hard']
  data: any
  question: any
  constructor(data: any, question: any) {
    this.data = data
    this.question = question
  }

  // Generate file top information
  private getMeta(problem: any) {
    const { stat } = problem
    const meta = [
      stat.frontend_question_id + '. ' + stat.question__title,
      this.DIFFICULTY_TYPES[problem.difficulty.level - 1] +
        '   ' +
        ((stat.total_acs / stat.total_submitted) * 100).toFixed() +
        '%',
    ]
    return meta.map((len) => '// ' + len + '\n').join('')
  }
  private toText(html: string) {
    html = html.replace(/<[^>]+>/gm, '') // remove tags
    html = html.replace(/\r/gm, '') // remove \r
    html = html.replace(/\n+/gm, '\n') // remove surplus \n
    return html
  }

  private unescape(str: string) {
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

  // Split a line word less than 80 & add // at the head
  private unfill(value: string) {
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

  private getDescription(content: string) {
    content = this.toText(content)
    content = this.unescape(content)
    content = content.replace(/\n\s\n/gm, '\n\n')
    content = content.replace(/\t/g, '    ')
    content = content
      .split('\n')
      .map((s) => s.trimRight())
      .map(this.unfill)
      .join('\n')
    return content
  }

  private getDefaultCode(code: string) {
    return JSON.parse(code)
      .find((lang: any) => lang.value === 'javascript')
      .defaultCode.replace('\nvar ', '\nconst ')
      .replace('    ', '')
      .replace(/;$/, '')
  }

  private getTestCode(str: string) {
    const argv = str.replace(/"/g, "'").split('\n')
    const argvStr = argv.length > 1 ? argv.join(', ') : argv[0]
    return `;[\n  ${argvStr},\n].forEach(() => {\n\n})`
  }

  generate() {
    const { content, codeDefinition, sampleTestCase } = this.question
    const meta = this.getMeta(this.data)
    const description = this.getDescription(content)
    const defaultCode = this.getDefaultCode(codeDefinition)
    const testCode = this.getTestCode(sampleTestCase)

    return [
      meta,
      description,
      defaultCode,
      testCode,
      '// Solution:',
      '// Submission Result: Accept',
    ].join('\n\n')
  }
}
