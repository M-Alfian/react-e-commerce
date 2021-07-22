import { LOCAL_END_POINT } from './endpoint'

export default class DbSources {
  static async getAllProducts() {
    const response = await fetch(`${LOCAL_END_POINT}/products`)
    const resJson = await response.json()
    return resJson
  }

  static async getProductById(id) {
    const response = await fetch(`${LOCAL_END_POINT}/products?id=${id}`)
    const resJson = await response.json()
    return resJson
  }

  static async getCategories() {
    const response = await fetch(`${LOCAL_END_POINT}/categories`)
    const resJson = await response.json()
    return resJson
  }

  static async getProductByCategories(id) {
    const response = await fetch(`${LOCAL_END_POINT}/categories?id=${id}`)
    const resJson = await response.json()
    return resJson
  }
}
