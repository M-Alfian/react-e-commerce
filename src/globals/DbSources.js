import { LOCAL_END_POINT } from './endpoint'

export default class DbSources {
  static async getAllProducts() {
    const response = await fetch(`${LOCAL_END_POINT}/products`)
    return await response.json()
  }

  static async getProductById(id) {
    const response = await fetch(`${LOCAL_END_POINT}/products?id=${id}`)
    return await response.json()
  }

  static async getCategories() {
    const response = await fetch(`${LOCAL_END_POINT}/categories`)
    return await response.json()
  }

  static async getProductByCategories(id) {
    const response = await fetch(`${LOCAL_END_POINT}/categories?id=${id}`)
    return await response.json()
  }
}