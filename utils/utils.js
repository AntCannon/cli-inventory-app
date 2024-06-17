const { nanoid } = require("nanoid")
const inform = console.log

function listItems(data) {
  const list = []
  for (let item of data) {
    list.push(item.name)
  }
  console.log(list)
}

function show(inventory, itemName) {
  const display = {
    name: true,
    priceInCents: true,
    inStock: true,
    fireModes: false,
    caliber: true,
    threadedBarrel: false,
    opticsMount: false
    
  }
  const item = inventory.find(({name}) => name === itemName)
  const info = []
  for (let key in item) {
    if (display[key]) info.push(`${key}: ${item[key]}`)
  }

  return info.join(" ")
}

function edit(inventory, itemName, property, value) {
  const index = inventory.findIndex(({name}) => name === itemName)
  if (index > -1) {
    inventory[index][property] = value
    inform(`${itemName} successfully updated`)
    return inventory
  } else {
      inform("No item with that name")
      return inventory
  }
}

function destroy(inventory, archive, itemName) {
  const index = inventory.findIndex(({name}) => name === itemName)

  if (index > -1) {
    const archivedFirearm = inventory.splice(index, 1)[0]
    archive.push(archivedFirearm)
    inform(`${itemName} moved from inventory and archived. Run restore to move archived items into inventory.`)
    return [inventory, archive]
  } else {
      inform("No item with that name. No changes have been made.")
      return [inventory, archive]
  }
}

function restore(archive, inventory, itemName) {
  const index =  archive.findIndex(({name}) => name === itemName)

  if (index > -1) {
    const restoredFirearm =  archive.splice(index, 1)[0]
    inventory.push(restoredFirearm)
    inform(`${itemName} restored from archive to inventory.`)
    return [archive, inventory]
  } else {
      inform("No item with that name in archive. No changes have been made.")
      return [archive, inventory]
  }
}

function create(inventory, itemName, itemPrice, itemCaliber) {
  const firearm = {
    name: itemName,
    id: nanoid(4),
    priceInCents: itemPrice,
    caliber: itemCaliber
  }

  inventory.push(firearm)
  inform(`Added ${itemName} to inventory`)
  return inventory
}

module.exports = {
  listItems,
  show,
  edit,
  destroy,
  restore,
  create
}