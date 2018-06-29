```js
const problem = {
  stat: {
    question_id: number,
    question__article__live: boolean, // 是否有官方解法
    question__article__slug: string,  // 官方解法字符串
    question__title: string,          // 标题名称，大写标题，空格间隔，用于文章
    question__title_slug: string,     // 小写标题，横杠间隔，用于url
    question__hide: boolean,
    total_acs: number,                // 总通过次数
    total_submitted: number,          // 总提交次数
    frontend_question_id: number,     // 前端问题序号
    is_new_question: boolean,
  },
  status: null,
  difficulty: {
    level: number,                    // 问题难度
  },
  paid_only: boolean,                 // 是否付费可读
  is_faor: boolean,
  frequency: number,
  progress: number,

  // new
  filename: string,
  filePath: string,
}
```