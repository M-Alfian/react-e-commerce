/* eslint-disable react/prop-types */
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../utils/AppContext'
import DbSources from '../../globals/DbSources'
import styles from './search.module.css'

export default function Search({ setIsLoading }) {
  const [inputValue, setInputValue] = useState('')
  const { setProducts } = useContext(ProductsContext)

  const searchFilter = async () => {
    setIsLoading((current) => !current)
    const allProduct = await DbSources.getAllProducts()
    const productFilter = allProduct
      .filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase()))

    setProducts(productFilter)
  }

  const onSearch = async (event) => {
    event.preventDefault()
    await searchFilter()
    setIsLoading((current) => !current)
  }

  const onSearchKeyPress = async (event) => {
    if (event.key === 'Enter' && inputValue !== '') {
      event.preventDefault()
      await searchFilter()
      setIsLoading((current) => !current)
    }
  }

  return (
    <div>
      <form className={styles.search} onSubmit={(event) => onSearch(event)}>
        <input
          type="text"
          placeholder="Product Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(event) => onSearchKeyPress(event)}
          className={styles.searchInput}
          required
        />
        <button type="submit" className={styles.button} aria-label="search button">
          <FontAwesomeIcon icon={faSearch} aria-hidden={false} />
        </button>
      </form>
    </div>
  )
}
