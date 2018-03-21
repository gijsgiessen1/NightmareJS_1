
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://duckduckgo.com')
  .type('#search_form_input_homepage', 'bolboosch')
  .click('#search_button_homepage')
  .wait('#r1-0 a.result__a')
  .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
  .click('#r1-0 a.result__a')
  .wait('#menu')
  .click('#menu')
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
