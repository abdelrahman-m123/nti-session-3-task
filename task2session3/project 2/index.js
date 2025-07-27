const addToCart = require('./modules/addToCart');
const removeFromCart = require('./modules/removeFromCart');
const listCart = require('./modules/listCart');
const calculateTotal = require('./modules/calculateTotal');

async function main() {
  
  await addToCart(1, 2);
  await addToCart(3, 1); 
  await listCart();
  await calculateTotal();
  await removeFromCart(1, 1); 
  await listCart();
  await calculateTotal();
}

main().catch(console.error);
