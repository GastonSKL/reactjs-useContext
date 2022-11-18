import React, { useContext } from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './Cart.css'
import {  TotalContext } from '../Contexts/TotalContextProvider'
 
export const Cart = () => {

    const {total, setTotal}  = useContext(TotalContext);

    return (
    <div className='cart'>
        <p className='cart__total'>Total: <b className='price'>{total}$</b><span className='icon'><FaCartArrowDown /></span> </p>
        <p className='priceAlone'>{total}$</p>
        <button onClick={()=>{setTotal(0)}} className='cart__clear'>Clear</button>
        
    </div>
  )
}
