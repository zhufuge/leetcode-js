export default class TemplateProcessor {
  private readonly REPOSITORY =
    'https://github.com/zhufuge/leetcode-js/blob/master/problems/'
  private readonly DIFFICULTY_TYPES = ['Easy', 'Medium', 'Hard']

  constructor() {}

  processLatest(content: string, latest: any[]) {
    const reg = /#\+BEGIN_LIST_LATEST\r\n(.+)\r\n#\+END_LIST_LATEST/gm
    return content.replace(reg, (match, p1) => {
      let str = ''
      for (let problem of latest) {
        const { stat, filename } = problem
        const id = stat.frontend_question_id
        const title = stat.question__title
        const url = this.REPOSITORY + filename
        str +=
          p1
            .replace('{{id}}', id)
            .replace('{{url}}', url)
            .replace('{{title}}', title) + '\n'
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
        const id = stat.frontend_question_id
        const title = stat.question__title
        const url = this.REPOSITORY + filename
        const diff = this.DIFFICULTY_TYPES[difficulty.level - 1]
        str +=
          p1
            .replace('{{id}}', id)
            .replace('{{url}}', url)
            .replace('{{title}}', title)
            .replace('{{difficulty}}', diff) + '\n'
      }
      return str
    })
  }
  process(content: string, template: string, value: string) {
    return content.replace(`{{${template}}}`, value)
  }
}
