import * as process from 'process'
import Generater from './generater/index'
import Tester from './tester/index'

const argv = process.argv

if (argv[2] === 'test') {
  const tester = new Tester(argv)
  tester.run()
} else {
  const generater = new Generater(argv)
  generater.run()
}
