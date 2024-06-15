const { readJSONFile } = require('../utils/helpers')

const inform = console.log
inform(readJSONFile('./data', 'inventory.json'))

function run() {
  
  switch (process.argv[2]) {
    case "index":
      inform(readJSONFile('./data', 'inventory.json'))
  }
}

run ();