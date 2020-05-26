import { exec } from 'child_process'
import Storage from '../storage/index'

export default class Tester {
  private store: Storage
  private argv: string[]

  constructor(argv: string[]) {
    this.store = new Storage()
    this.argv = argv
  }

  run() {
    const problem = this.store.getProblem(Number.parseInt(this.argv[3]))
    console.log(problem.stat.question__title)
    exec(`node ${problem.filePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }
      if (stdout) console.log(stdout)
      if (stderr) console.log(`stderr: ${stderr}`)
    })
  }
}
