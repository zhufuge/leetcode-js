import { join, resolve, extname } from 'path'
import * as fs from 'fs'

import {
  PROBLEMS_DIR,
  PROBLEM_LIST_FILE,
  ACCEPTED_FILE,
  POST_TEMPLATES,
} from './config'

export default class Storage {
  private problems: Array<any> = []

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

    this.problems = this.readJSONSync(PROBLEM_LIST_FILE).map((problem: any) => {
      problem.filename = getFilename(
        problem.stat.frontend_question_id,
        problem.stat.question__title_slug
      )
      problem.filePath = getFilePath(problem.filename)
      return problem
    })
  }
  private getProblemId(filename: string) {
    return parseInt((<string[]>filename.match(/(\d*)-.*/))[1], 10)
  }
  private updateAccepted() {
    const accepted = this.readJSONSync(ACCEPTED_FILE)
    const files = fs
      .readdirSync(PROBLEMS_DIR)
      .filter((filename) => extname(filename) === '.js')
      .filter((filename) => !accepted.includes(this.getProblemId(filename)))

    for (let filename of files) {
      const filePath = join(PROBLEMS_DIR, filename)
      const content = fs.readFileSync(filePath, 'utf8')
      if (content.includes('// Submission Result: Accepted')) {
        accepted.push(this.getProblemId(filename))
      }
    }

    accepted.sort((a: number, b: number) => a - b)
    this.writeJSONSync(ACCEPTED_FILE, accepted)
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
      const exist = fs.readdirSync(PROBLEMS_DIR)
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
    return this.readJSONSync(ACCEPTED_FILE)
  }
  getPostTemplates() {
    return POST_TEMPLATES.map((t) => {
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
    fs.writeFileSync(PROBLEM_LIST_FILE, json, {
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
