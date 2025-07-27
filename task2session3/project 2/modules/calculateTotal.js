const { readCart } = require('./cartHelpers');

async function calculateTotal() {
  try {
    const cart = await readCart();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    console.log(`Total: $${total.toFixed(2)}`);
    return total;
  } catch (error) {
    console.error('Error calculating total:', error.message);
    return 0;
  }
}

module.exports = calculateTotal;