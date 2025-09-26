// Simula llamadas as�ncronas a una API con Promises y async/await 
import { products } from '../data/products'

// Simula un retardo (como si fuese un fetch real)
const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export async function getProducts(categoryId) {
  await delay(600)
  if (!categoryId) return products
  return products.filter((p) => p.category === categoryId)
}

export async function getProductById(id) {
  await delay(600)
  return products.find((p) => p.id === id)
}

