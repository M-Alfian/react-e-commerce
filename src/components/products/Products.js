import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../utils/AppContext'
import Card from '../card/Card'
import Filter from '../filter/filter'
import styles from './products.module.css'
import DbSources from '../../globals/DbSources'
import Skeleton from '../skeleton/skeleton'
import Search from '../search/search'

export default function Products() {
  const { products, setProducts } = useContext(ProductsContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('error')

  useEffect(() => {
    const getProductList = async () => {
      try {
        setIsLoading(true)
        const data = await DbSources.getAllProducts()
        setProducts(data)
        setIsLoading(false)
      } catch (err) {
        setIsError(true)
        setErrorMessage(err)
        setIsLoading(false)
      }
    }
    getProductList()
  }, [setProducts])

  return (
    <div>
      <Search setIsLoading={setIsLoading} />
      <Filter setIsLoading={setIsLoading} />
      <div className={styles.grid}>
        {isLoading && <Skeleton />}
        {products && products.map(({
          id,
          title,
          description,
          price,
          image,
        }) => (
          <Card
            id={id}
            key={id}
            title={title}
            price={price}
            description={description}
            image={image}
          />
        ))}
        {products && products.length === 0 && !isError
          && <p>product is not found</p>}
        <p>{isError && `${errorMessage}`}</p>
      </div>
    </div>
  )
}
