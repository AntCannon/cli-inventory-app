function listItems(data) {
  const list = []
  for (let item of data) {
    list.push(item.name)
  }
  console.log(list)
}

module.exports = {
  listItems
}