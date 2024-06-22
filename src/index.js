const { readJSONFile, writeJSONFile } = require('../utils/helpers')
const {
  listItems,
  show,
  edit,
  move,
  destroy,
  restore,
  create
} = require('../utils/utils')

const {
  addToCart,
  getCartTotal
} = require('../utils/shopping')

const inform = console.log

function run() {
  const action = process.argv[2]
  const firearm = process.argv[3]
  const inventory = readJSONFile('./data', 'inventory.json')
  const archive = readJSONFile('./data', 'archive.json')
  const cart = readJSONFile('./cart', 'cart.json')
  let writeToFile = false
  let writeToArchive = false
  let writeToCart = false
  let updatedInventory = []
  let updatedArchive = []
  let updatedCart = []

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
    case "addToCart":
      updatedCart = addToCart(inventory, cart, firearm)
      inform(cart)
      inform(getCartTotal(updatedCart))
      writeToCart = true
      break
    case "cartTotal":
      inform(getCartTotal(cart))
      break
  }


  if (writeToFile) {
    writeJSONFile('./data', 'inventory.json', updatedInventory)
  }

  if (writeToArchive) {
    writeJSONFile('./data', 'archive.json', updatedArchive)
  }

  if (writeToCart) {
    writeJSONFile('./cart', 'cart.json', updatedCart)
  }

}

run ();