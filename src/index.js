const { readJSONFile, writeJSONFile } = require('../utils/helpers')
const {
  listItems,
  show
} = require('../utils/utils')

const inform = console.log
const inventory = readJSONFile('./data', 'inventory.json')

function run() {
  
  switch (process.argv[2]) {
    case "index":
      inform(inventory)
      listItems(inventory)
      break
    case "show":
      inform(show(inventory, process.argv[3]))
      break
  }
}

run ();