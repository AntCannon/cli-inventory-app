const { nanoid } = require("nanoid")
const { getItemByName } = require('./inventory')
const inform = console.log

function listItems(data) {
  const list = []
  for (let item of data) {
    list.push(item.name)
  }
  console.log(list)
}

function show(collection, itemName) {
  const display = {
    name: true,
    priceInCents: true,
    inStock: true,
    fireModes: false,
    caliber: true,
    threadedBarrel: false,
    opticsMount: false
    
  }
  const item = getItemByName(collection, itemName)
  const info = []
  for (let key in item) {
    if (display[key]) info.push(`${key}: ${item[key]}`)
  }

  return info.join(" ")
}

function edit(collection, itemName, property, value) {
  const item = getItemByName(collection, itemName)

  if (item) {
    item[property] = value
    inform(`${itemName} successfully updated`)
    return collection
  } else {
      inform("No item with that name")
      return collection
  }
}

function move(sourceCollection, targetCollection, itemName) {
  const index = sourceCollection.findIndex(({name}) => name === itemName)

  if (index > -1) {
    const archivedFirearm = sourceCollection.splice(index, 1)[0]
    targetCollection.push(archivedFirearm)
    inform(`${itemName} moved from sourceCollection and archived. Run restore to move archived items into sourceCollection.`)
    return [sourceCollection, targetCollection]
  } else {
      inform("No item with that name. No changes have been made.")
      return [sourceCollection, targetCollection]
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
  move,
  destroy,
  restore,
  create
}