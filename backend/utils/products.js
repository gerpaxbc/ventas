const faker = require('faker')

const createProducts = (size = 10) => {
  const products = []
  for (let i = 0; i < size; i++) {
    products.push({
      id: i,
      sku: faker.random.alphaNumeric(6),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      image: 'http://placekitten.com/g/100/100',
      price: faker.commerce.price(),
      product: faker.commerce.product(),
      quantity: Math.random() * 100 + 1
    })
  }
  return products
}

module.exports = createProducts
