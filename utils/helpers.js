const { readFileSync, writeFileSync } = require('node:fs')

function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, 'utf8')
  return collection ? JSON.parse(collection) : [];
}

function writeJSONFile(path, fileName, data) {
  const collection = readJSONFile(path, fileName)
  collection.push(data)
  return writeFileSync(`${path}/${fileName}`, JSON.stringify(collection), {encode: "utf-8"})
}

module.exports = {
  readJSONFile,
  writeJSONFile
}