const { readCart, writeCart } = require('./cartHelpers');

async function removeFromCart(productId, quantity = 1) {
  try {
    const cart = await readCart();
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex === -1) {
      throw new Error(`Product with ID ${productId} not found in cart`);
    }

    if (cart[itemIndex].quantity <= quantity) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity -= quantity;
    }

    await writeCart(cart);
    console.log(`Removed ${quantity} items from cart`);
    return true;
  } catch (error) {
    console.error('Error removing from cart:', error.message);
    return false;
  }
}

module.exports = removeFromCart;