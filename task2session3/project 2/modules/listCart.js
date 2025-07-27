const { readCart } = require('./cartHelpers');

async function listCart() {
  try {
    const cart = await readCart();
    
    if (cart.length === 0) {
      console.log('Your cart is empty');
      return [];
    }

    console.log('Cart Items:');
    cart.forEach(item => {
      console.log(`${item.name} - $${item.price} x ${item.quantity}`);
    });

    return cart;
  } catch (error) {
    console.error('Error listing cart:', error.message);
    return [];
  }
}

module.exports = listCart;