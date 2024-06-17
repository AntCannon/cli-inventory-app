const inform = console.log

function getItemByName(collection, itemName) {
  const index = collection.findIndex(({name}) => name === itemName)
  if (index > -1) {
    const item = collection[index]
    return item
  } else {
    inform(`${itemName} does not exist in named collection`)
  }
}

module.exports = {
  getItemByName
}