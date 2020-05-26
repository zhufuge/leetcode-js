import fetch from 'node-fetch'

export default class Request {
  private readonly PROBLEM_LIST_API = 'https://leetcode.com/api/problems/all'
  private readonly GRAPHQL_URL = 'https://leetcode.com/graphql'

  constructor() {}

  private GET_DESCRIPTION_URL(title: string) {
    return `https://leetcode.com/problems/${title}/description/`
  }

  // Request all-problem list by leetcode api.
  async fetchProblemList() {
    console.log(`Request ${this.PROBLEM_LIST_API}`)
    return await fetch(this.PROBLEM_LIST_API)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err)
        throw Error('Request Error!')
      })
  }

  async fetchProblem(title: string) {
    const url = this.GET_DESCRIPTION_URL(title)
    // request top-url to get cookies
    const cookie = await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Status: ' + res.statusText)
        }
        return res.headers.raw()['set-cookie']
      })
      .catch((err) => {
        throw Error(err)
      })

    // real to request problem
    console.log(`Request <${title}>: ${this.GRAPHQL_URL}`)
    return await fetch(this.GRAPHQL_URL, {
      method: 'POST',
      headers: {
        Cookie: cookie.join('; '),
        'x-csrftoken': cookie[1],
        Referer: url,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operationName: 'getQuestionDetail',
        query: `query getQuestionDetail($titleSlug: String!)
        { question(titleSlug: $titleSlug) { content codeDefinition sampleTestCase } }`,
        variables: { titleSlug: title },
      }),
    })
      .then((res) => res.json())
      .then((res) => res.data)
      .catch((err) => {
        throw Error(err)
      })
  }
}
