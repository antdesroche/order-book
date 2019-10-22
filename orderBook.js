function reconcileOrder(existingBook, incomingOrder) {

  var matchingOrders = existingBook.filter( (currentItem) => {
  }) 
  if (existingBook.push(incomingOrder) !== true){

  }
 const totalOrders = existingBook.concat([incomingOrder])
 let btcOrder = totalOrders[0]
 let btcOrder2 = totalOrders[1]
 if (btcOrder.type !== btcOrder2.type &&
  btcOrder.price === btcOrder2.price &&
  btcOrder.quantity === btcOrder2.quantity) {
    return []
  }
  if (btcOrder.type !== btcOrder2.type &&
    btcOrder.quantity !== btcOrder2.quantity &&
    btcOrder.price === btcOrder2.price) {
    if (btcOrder.quantity - btcOrder2.quantity > 0) {
      return [{
        type: 'buy',
        quantity: btcOrder.quantity - btcOrder2.quantity,
        price: btcOrder.price,
      }]
    }
      else if (btcOrder2.quantity - btcOrder.quantity > 0) {
        return [{
          type: 'sell',
          quantity: btcOrder2.quantity - btcOrder.quantity,
          price: btcOrder.price,
        }]
    }
  }
 
return existingBook
}
module.exports = reconcileOrder
