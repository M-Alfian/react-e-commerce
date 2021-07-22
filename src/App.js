import React from 'react'
import Layout from './Layout'
import { ProductsProvider } from './utils/AppContext'

function App() {
  return (
    <ProductsProvider>
      <Layout />
    </ProductsProvider>
  )
}

export default App
