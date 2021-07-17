import Card from '../card/Card'
import Filter from '../filter/filter'
import styles from './products.module.css'
import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../utils/AppContext'
import DbSources from '../../globals/DbSources'
import Skeleton from '../skeleton/skeleton'

export default function Products() {
  const { products, setProducts } = useContext(ProductsContext)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const getProductList = async () => {
      setIsLoading(true)
      const data = await DbSources.getAllProducts()
      setTimeout(() => {
        setProducts(data)
        setIsLoading(false)
      }, 1000)
    }
    getProductList()
  }, [setProducts])

  return (
    <div className={styles.container}>
      <Filter setIsLoading={setIsLoading}/>
      <div className={styles.grid}>
        {isLoading && Array(10).fill().map((value, index) => (
          <Skeleton key={index}/> 
        ))}
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