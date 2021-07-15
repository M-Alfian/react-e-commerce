import { createContext, useState } from 'react'

export const ProductsContext = createContext()
export const ShoppingListContext = createContext()

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(null)
  const [cartItemLists, setCartItemLists] = useState([])

  const productsProps = {products, setProducts}
  const listProps = {cartItemLists, setCartItemLists}

  return (
    <ProductsContext.Provider value={productsProps}>
      <ShoppingListContext.Provider value={listProps}>
        {children}
      </ShoppingListContext.Provider>
    </ProductsContext.Provider>
  )
}