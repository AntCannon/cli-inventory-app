const { readFileSync } = require('node:fs')

function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, 'utf8');
  return collection ? JSON.parse(collection) : [];
}

module.exports = {
  readJSONFile
}