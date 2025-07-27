const { readProducts, readCart, writeCart } = require('./cartHelpers');

async function addToCart(productId, quantity = 1) {
  try {
    const [products, cart] = await Promise.all([readProducts(), readCart()]);
    const product = products.find(p => p.id === productId);

    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity
      });
    }

    await writeCart(cart);
    console.log(`Added ${quantity} ${product.name} to cart`);
    return true;
  } catch (error) {
    console.error('Error adding to cart:', error.message);
    return false;
  }
}

module.exports = addToCart;