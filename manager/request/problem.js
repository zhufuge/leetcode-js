const request = require('request')

// enable cookies
const jar = request.jar()

function getURL(title) {
  return `https://leetcode.com/problems/${title}/description/`
}

// graphql query data
function getJSON(title) {
  return {
    operationName: 'getQuestionDetail',
    query: `query getQuestionDetail($titleSlug: String!)
      { question(titleSlug: $titleSlug) { content codeDefinition sampleTestCase metaData } }`,
    variables: { titleSlug: title }
  }
}

function main(title, callback) {
  const url = getURL(title)
  console.log('Request URL:', url)
  // request top-url to get cookies
  request({ url, jar }, function(error, res) {
    if (error) {
      console.log(error)
    }

    if (res.statusCode !== 200) {
      console.log('Status Code:', res.statusCode)
    }

    // real to request problem
    request.post('https://leetcode.com/graphql', {
      json: getJSON(title),
      headers: {
        'Cookie': jar.getCookieString(url),
        'x-csrftoken': jar.getCookies(url)[1].value,
        'Referer': url,
      }
    }, function(error, res, body) {
      if (callback) {
        callback(error, res, body)
      }
    })
  })
}

module.exports = main