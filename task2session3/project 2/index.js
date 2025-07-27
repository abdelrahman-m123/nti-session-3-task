const addToCart = require('./modules/addToCart');
const removeFromCart = require('./modules/removeFromCart');
const listCart = require('./modules/listCart');
const calculateTotal = require('./modules/calculateTotal');

async function main() {
  // Example usage
  await addToCart(1, 2); // Add product with ID 1, quantity 2
  await addToCart(3, 1); // Add product with ID 3, quantity 1
  await listCart();
  await calculateTotal();
  await removeFromCart(1, 1); // Remove 1 quantity of product with ID 1
  await listCart();
  await calculateTotal();
}

main().catch(console.error);