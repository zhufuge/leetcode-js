import Request from '../request/index'
import Storage from '../storage/index'
import TemplateProcessor from './TemplateProcessor'
import QuestionGenerater from './QuestionGenerater'

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

    const ques = new QuestionGenerater(problem, res.question)
    this.store.saveProblemFile(problem.filePath, ques.generate())
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
