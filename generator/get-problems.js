const fs = require('fs')
const cheerio = require('cheerio')

const $ = cheerio.load(fs.readFileSync('problems.all.html', 'utf8'))

function getProblems($) {
  const problems = {}

  $('tbody.reactable-data tr').each(function(i) {
    console.log(i)
    const td = $(this).children('td')
    problems[td.eq(1).text()] = {
      title: td.eq(2).attr('value'),
      locked: td.eq(2).find('i.fa-lock').hasClass('fa-lock'),
      acceptance: parseInt(td.eq(4).attr('value')) + '%',
      difficulty: $(td.eq(5), 'span').text(),
    }
  })

  return problems
}

const problems = getProblems($)

fs.writeFileSync('problems.all.json', JSON.stringify(problems), 'utf8')
