import React from "react"
import { CardsContainer } from './Components/CardsContainer'
import { ProductsContextProvider } from './Contexts/ProductsContextProvider';
import { TotalContextProvider } from './Contexts/TotalContextProvider'; 

function App() {
  

  return (
    <>
    <TotalContextProvider>
      <ProductsContextProvider>
      <CardsContainer />
      </ProductsContextProvider>
    </TotalContextProvider>
    
    </>
  )
}

export default App
