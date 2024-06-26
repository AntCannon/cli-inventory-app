const {
  getItemByName
} = require('./inventory')
const inform = console.log

function centsToDollars(cents) {
  return '$'+(cents/100).toFixed(2)
}

function addToCart(inventory, cart, itemName) {
  const item = getItemByName(inventory, itemName)
  
  const itemCartIndex = cart.findIndex(({id}) => id === item.id)

  if (itemCartIndex > -1) {
    cart[itemCartIndex].quantity = cart[itemCartIndex].quantity + 1
    const itemTotal = item.priceInCents * cart[itemCartIndex].quantity
    inform(`${itemName} quantity updated to ${cart[itemCartIndex].quantity} item total price ${itemTotal}. Continue shopping.`)
  } else {
    const cartItem = {
      id: item.id,
      item,
      quantity: 1
    }
    cart.push(cartItem)
    inform(`${itemName} added to cart! Continue shopping.`)
  }
  
  return cart
}

function getCartTotal(cart) {
  const total = cart.reduce((sum, cartItem ) => sum + (cartItem.item.priceInCents * cartItem.quantity), 0)
  return centsToDollars(total)
}

module.exports ={
  addToCart,
  getCartTotal
}