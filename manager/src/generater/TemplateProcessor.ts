export default class TemplateProcessor {
  private readonly REPOSITORY =
    'https://github.com/zhufuge/leetcode-js/blob/master/problems/'
  private readonly DIFFICULTY_TYPES = ['Easy', 'Medium', 'Hard']

  constructor() {}

  replaceValues(str: string, values: { [index: string]: string }) {
    for (let key in values) {
      str = str.replace(new RegExp(`{{${key}}}`, 'g'), values[key])
    }
    return str
  }
  // TODO 统一参数，用同一个处理器
  processLatest(content: string, latest: any[]) {
    const reg = /#\+BEGIN_LIST_LATEST\r\n(.+)\r\n#\+END_LIST_LATEST/gm
    return content.replace(reg, (match, p1) => {
      let str = ''
      for (let problem of latest) {
        const { stat, filename } = problem
        const templateValues = {
          id: stat.frontend_question_id,
          title: stat.question__title,
          url: this.REPOSITORY + filename,
        }
        str += this.replaceValues(p1, templateValues) + '\n'
      }
      return str
    })
  }
  processTable(content: string, problems: any[]) {
    const reg = /#\+BEGIN_LIST_TABLE\r\n(.+)\r\n#\+END_LIST_TABLE/gm
    return content.replace(reg, (match, p1) => {
      let str = ''
      for (let problem of problems) {
        const { stat, filename, difficulty } = problem
        const templateValues = {
          id: stat.frontend_question_id,
          title: stat.question__title,
          url: this.REPOSITORY + filename,
          difficulty: this.DIFFICULTY_TYPES[difficulty.level - 1]
        }
        str += this.replaceValues(p1, templateValues) + '\n'
      }
      return str
    })
  }
  process(content: string, template: string, value: string) {
    return this.replaceValues(content, { [template]: value })
  }
}
