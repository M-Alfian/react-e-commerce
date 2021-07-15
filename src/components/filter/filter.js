import { useEffect, useState, useContext } from 'react'
import DbSources from '../../globals/DbSources'
import { ProductsContext } from '../../utils/AppContext'
import styles from './filter.module.css'

export default function Filter() {
  const [categories, setCategories] = useState(null)
  const [value, setValue] = useState()
  const { setProducts } = useContext(ProductsContext)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    const getProductsCategories = async () => {
      if (value) {
        const [ list ] = await DbSources.getProductByCategories(value)
        setProducts(list.products)
      }
    }
    getProductsCategories()
  }, [value])

  useEffect(() => {
    const getCategoriesList = async () => {
      const categoriesList = await DbSources.getCategories()
      setCategories(categoriesList)
    }
    getCategoriesList()
  }, [])

  return (
    <select value={value} onChange={handleChange} className={styles.select}>
      <option disabled selected>Categories</option>
      {categories && categories.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  )
}