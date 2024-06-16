const { readJSONFile, writeJSONFile } = require('../utils/helpers')
const {
  listItems,
  show,
  edit
} = require('../utils/utils')

const inform = console.log

function run() {
  const action = process.argv[2]
  const firearm = process.argv[3]
  const inventory = readJSONFile('./data', 'inventory.json')
  let writeToFile = false
  let updatedInventory = []

  switch (action) {
    case "index":
      inform(inventory)
      listItems(inventory)
      break
    case "show":
      inform(show(inventory, firearm))
      break
    case "update":
      updatedInventory = edit(inventory, firearm, process.argv[4], process.argv[5])
      writeToFile = true
      break
  }

  if (writeToFile) {
    writeJSONFile('./data', 'inventory.json', updatedInventory)
  }
}

run ();