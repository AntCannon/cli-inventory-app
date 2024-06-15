const { readJSONFile, writeJSONFile } = require('../utils/helpers')
const { listItems } = require('../utils/utils')

const inform = console.log
const inventory = readJSONFile('./data', 'inventory.json')

function run() {
  
  switch (process.argv[2]) {
    case "index":
      inform(inventory)
      listItems(inventory)
      break
    case "show":

  }
}

run ();