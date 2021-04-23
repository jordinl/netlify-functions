require('../../other')
const lodash = require('lodash')

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({message: `Hello World ${lodash.random()}`})
  };
}
