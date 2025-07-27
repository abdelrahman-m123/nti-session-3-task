const fs = require('fs').promises;
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const cartPath = path.join(__dirname, '../data/cart.json');

async function readProducts() {
  const data = await fs.readFile(productsPath);
  return JSON.parse(data);
}

async function readCart() {
  try {
    const data = await fs.readFile(cartPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If cart doesn't exist, return empty array
    return [];
  }
}

async function writeCart(cart) {
  await fs.writeFile(cartPath, JSON.stringify(cart, null, 2), 'utf8');
}

module.exports = { readProducts, readCart, writeCart };