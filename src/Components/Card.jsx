import './Card.css'
import { useContext } from "react"
import { ProductContext } from "../Contexts/ProductsContextProvider"
import { TotalContext } from "../Contexts/TotalContextProvider";

export const Card = ({img, name, price}) => {

    const{total, setTotal} = useContext(TotalContext);  
  
    return (
    <div className="card"  >
            <div className='card__bar' ></div>
            <img src={img} className="card__img"  alt="img" />
            <p className="card__name">{name}</p>
            <div className="card__description">
                <p className="card__description-price">{price}$</p>
                <button onClick={()=>{setTotal(price + total)}} className='card__description-button'>Add</button>
            </div>
    </div>
  )
}
