import { useContext } from "react"
import { Card } from "./Card"
import './CardsContainer.css'
import { ProductContext } from "../Contexts/ProductsContextProvider"

export const CardsContainer = () => {

    const products = useContext(ProductContext)
    console.log(products)

  return (
    <div className="cardContainer">
 
 {products.map(pr => <Card key={pr.id} img={pr.images[0]}  name={pr.title} price={pr.price} />)}


    </div>
  )
}
