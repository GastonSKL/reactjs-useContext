import { useContext } from "react";
import { Card } from "./Card";
import "./CardsContainer.css";
import { ProductContext } from "../Contexts/ProductsContextProvider";
import { Cart } from "./Cart";
import { TotalContext } from "../Contexts/TotalContextProvider";

export const CardsContainer = () => {
  const products = useContext(ProductContext);
  

  return (
    <div className="main">
        <Cart />
        <div className="cardContainer">
          {products.map((pr) => (
            <Card key={pr.id} img={pr.images[0]} name={pr.title} price={pr.price} />
          ))}
        </div>
    </div>
  );
};
