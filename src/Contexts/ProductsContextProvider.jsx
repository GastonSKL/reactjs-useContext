import React from 'react'
import { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

export const ProductsContextProvider = ({children}) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
    <ProductContext.Provider value={products}>
    {children}
    </ProductContext.Provider>
  )
}
