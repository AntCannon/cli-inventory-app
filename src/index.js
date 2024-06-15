const { readJSONFile, writeJSONFile } = require('../utils/helpers')

const inform = console.log
writeJSONFile('./data', 'inventory.json', {TEST: true})
inform(readJSONFile('./data', 'inventory.json'))

function run() {
  
  switch (process.argv[2]) {
    case "index":
      inform(readJSONFile('./data', 'inventory.json'))
  }
}

run ();