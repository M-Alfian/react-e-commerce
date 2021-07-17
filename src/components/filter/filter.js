import { useEffect, useState, useContext } from 'react'
import DbSources from '../../globals/DbSources'
import { ProductsContext } from '../../utils/AppContext'
import styles from './filter.module.css'

export default function Filter({ setIsLoading }) {
  const [categories, setCategories] = useState(null)
  const [value, setValue] = useState()
  const { setProducts } = useContext(ProductsContext)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  
  useEffect(() => {
    const getCategoriesList = async () => {
      const categoriesList = await DbSources.getCategories()
      setCategories(categoriesList)
    }
    getCategoriesList()
  }, [])
  
  useEffect(() => {
    const getProductsCategories = async () => {
      setProducts([])
      setIsLoading((current) => !current)
      
      if (value && value !== 'All') {
        const [ list ] = await DbSources.getProductByCategories(value)
        setTimeout(() => {
          setProducts(list.products)
          setIsLoading((current) => !current)
        }, 1000);
      }
      
      if (value && value === 'All') {
        const products = await DbSources.getAllProducts()
        setTimeout(() => {
          setProducts(products)
          setIsLoading((current) => !current)
        }, 1000);
      }
    }
    getProductsCategories()
  }, [setIsLoading, setProducts, value])

  return (
    <select value={value} onChange={handleChange} className={styles.select}>
      <option defaultValue>All</option>
      {categories && categories.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  )
}