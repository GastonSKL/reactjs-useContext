import React from "react"
import { CardsContainer } from './Components/CardsContainer'
import { ProductsContextProvider } from './Contexts/ProductsContextProvider';

function App() {
  

  return (
    <>
    <ProductsContextProvider>
    <CardsContainer />
    </ProductsContextProvider>
    
    </>
  )
}

export default App
