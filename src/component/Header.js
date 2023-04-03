import React from 'react'
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import{useSelector} from "react-redux"
export  function Header() {
  const {cartList} = useCart()
  const products = useSelector(state => state.cartState.cartList)
  return (
    <section>
      
      
<ul className="nav">
  
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to ="/Cart">Cart</NavLink>

  </li> 
  <li> {products.length} </li>
</ul>
    </section>
  )
}
