import { join, resolve, extname } from 'path'

const ROOT_PATH = resolve(join(__dirname, '..', '..', '..'))
const MANAGER_PATH = join(ROOT_PATH, 'manager')
const DATABASE_PATH = join(MANAGER_PATH, 'database')
const OUTPUT_PATH = join(MANAGER_PATH, 'output')

export const PROBLEMS_DIR = join(ROOT_PATH, 'problems')

export const PROBLEM_LIST_FILE = join(DATABASE_PATH, 'problem-list.json')
export const ACCEPTED_FILE = join(DATABASE_PATH, 'accepted.json')

export const POST_TEMPLATES = [
  // {
  //   entry: join(DATABASE_PATH, 'template.org'),
  //   output: join(ROOT_PATH, 'README.org'),
  // },
  {
    entry: join(DATABASE_PATH, 'template.md'),
    output: [join(ROOT_PATH, 'README.md')],
  },
  {
    entry: join(DATABASE_PATH, 'article.md'),
    output: [join(OUTPUT_PATH, '2017-11-01-LeetCode-JS.md')],
  },
]
