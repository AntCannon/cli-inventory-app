const { readJSONFile, writeJSONFile } = require('../utils/helpers')
const {
  listItems,
  show,
  edit,
  destroy,
  restore,
  create
} = require('../utils/utils')

const inform = console.log

function run() {
  const action = process.argv[2]
  const firearm = process.argv[3]
  const inventory = readJSONFile('./data', 'inventory.json')
  const archive = readJSONFile('./data', 'archive.json')
  let writeToFile = false
  let writeToArchive = false
  let updatedInventory = []
  let updatedArchive = []

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
    case "destroy":
      [updatedInventory, updatedArchive] = destroy(inventory, archive, firearm)
      writeToFile = true
      writeToArchive = true
      break
    case "restore":
      [updatedArchive, updatedInventory] = restore(archive, inventory, firearm)
      writeToFile = true
      writeToArchive = true
      break
    case "create":
      const itemPrice = process.argv[4]
      const itemCaliber = process.argv[5]
      updatedInventory = create(inventory, firearm, itemPrice, itemCaliber)
      writeToFile = true
      break
  }


  if (writeToFile) {
    writeJSONFile('./data', 'inventory.json', updatedInventory)
  }

  if (writeToArchive) {
    writeJSONFile('./data', 'archive.json', updatedArchive)
  }

}

run ();