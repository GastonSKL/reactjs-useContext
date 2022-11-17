import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './Cart.css'

export const Cart = () => {
  return (
    <div className='cart'>
        <p className='cart__total'>Total: <b className='price'>1000$</b><span className='icon'><FaCartArrowDown /></span> </p>
        <p className='priceAlone'>1000$</p>
        <button className='cart__clear'>Clear</button>
        
    </div>
  )
}
