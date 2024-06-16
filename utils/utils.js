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
  } else {
      inform("No item with that name")
  }
}

module.exports = {
  listItems,
  show,
  edit
}