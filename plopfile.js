const contentListGenerator = require('./plop-templates/content/list/prompt')
const contentDetailGenerator = require('./plop-templates/content/detail/prompt')
const contentNewGenerator = require('./plop-templates/content/new/prompt')
const contentEditGenerator = require('./plop-templates/content/edit/prompt')
const contentQueryGenerator = require('./plop-templates/content/query/prompt')

const chartsLayoutGenerator = require('./plop-templates/charts/layout/prompt')
const chartsCase1Generator = require('./plop-templates/charts/case1/prompt')

module.exports = function (plop) {
  plop.setGenerator('content-list', contentListGenerator)
  plop.setGenerator('content-detail', contentDetailGenerator)
  plop.setGenerator('content-new', contentNewGenerator)
  plop.setGenerator('content-edit', contentEditGenerator)
  plop.setGenerator('content-query', contentQueryGenerator)

  plop.setGenerator('charts-layout', chartsLayoutGenerator)
  plop.setGenerator('charts-case-1', chartsCase1Generator)
}
