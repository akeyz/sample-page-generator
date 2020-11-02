const contentListGenerator = require('./plop-templates/content/list/prompt')
const contentDetailGenerator = require('./plop-templates/content/detail/prompt')
const contentNewGenerator = require('./plop-templates/content/new/prompt')
const contentEditGenerator = require('./plop-templates/content/edit/prompt')

module.exports = function (plop) {
  plop.setGenerator('content-list', contentListGenerator)
  plop.setGenerator('content-detail', contentDetailGenerator)
  plop.setGenerator('content-new', contentNewGenerator)
  plop.setGenerator('content-edit', contentEditGenerator)
}
