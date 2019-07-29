const { StrictEqualAssertion } = require('@cuties/assert')
const { ReadDataByPath } = require('@cuties/fs')

new StrictEqualAssertion(
  new ReadDataByPath('./text1.txt'),
  'info'
).call()
