const listGenerator = require('./plop-templates/list/prompt')
const detailGenerator = require('./plop-templates/detail/prompt')
const newGenerator = require('./plop-templates/new/prompt')

module.exports = function (plop) {
  plop.setGenerator('list', listGenerator)
  plop.setGenerator('detail', detailGenerator)
  plop.setGenerator('new', newGenerator)
}
