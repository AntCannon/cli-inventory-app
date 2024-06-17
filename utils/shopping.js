const {
  getItemByName
} = require('./inventory')
const inform = console.log

function addToCart(inventory, cart, itemName) {
  const item = getItemByName(inventory, itemName)
  cart.push(item)
  inform(`${itemName} added to cart! Continue shopping.`)
  return cart
}

module.exports ={
  addToCart
}