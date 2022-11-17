import './Card.css'
import { useContext } from "react"
import { ProductContext } from "../Contexts/ProductsContextProvider"

export const Card = ({img, name, price}) => {

    
    return (
    <div className="card"  >
            <div className='card__bar' ></div>
            <img src={img} className="card__img"  alt="img" />
            <p className="card__name">{name}</p>
            <div className="card__description">
                <p className="card__description-price">{price}$</p>
                <button className='card__description-button'>Add</button>
            </div>
    </div>
  )
}
