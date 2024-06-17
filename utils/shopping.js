const {
  getItemByName
} = require('./inventory')
const inform = console.log

function centsToDollars(cents) {
  return '$'+(cents/100).toFixed(2)
}

function addToCart(inventory, cart, itemName) {
  const item = getItemByName(inventory, itemName)
  const cartItem = {
    id: item.id,
    item,
    count: cart.find(({id}) => id === item.id).count + 1 || 1
  }
  // update cart item count
  cart.push(item)
  inform(`${itemName} added to cart! Continue shopping.`)
  return cart
}

function getCartTotal(cart) {
  const total = cart.reduce((sum, {priceInCents}) => sum + +priceInCents, 0)
  return centsToDollars(total)
}

module.exports ={
  addToCart,
  getCartTotal
}