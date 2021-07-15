import Card from '../card/Card'
import Filter from '../filter/filter'
import styles from './products.module.css'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../utils/AppContext'
import DbSources from '../../globals/DbSources'

export default function Products() {
  const { products, setProducts } = useContext(ProductsContext)

  useEffect(() => {
    const getProductList = async () => {
      const data = await DbSources.getAllProducts()
      setProducts(data)
    }
    getProductList()
  }, [])

  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.grid}>
      {products && products.map(({ id, title, description, price, image }) => (
        <Card 
          id={id}
          key={id}
          title={title}
          price={price}
          description={description}
          image={image}
          />
      ))}
      </div>
    </div>
  )
}