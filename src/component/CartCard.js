import React, { useContext } from "react";
import {  remove} from "../stores/cartSlice";
import { useDispatch } from "react-redux";

// import { CartContext } from "../context/CartContext";
// import { useCart } from "../context/CartContext";
export const CartCard = ({ product }) => {
  // const { removeFromCart } = useCart();
  const dispatch = useDispatch()

  const { name, price, image } = product;
  return (
    <div>
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <i className="an an-shopping-bag fl"></i>
      
          <div className="shopping-cart-total">
            <span className="lighter-text">Total:</span>
            <span className="main-color-text">${product.price}</span>
          </div>
        </div>
        <ul className="shopping-cart-items">
          <li className="clearfix">
            <img src={image} alt="item1" />
            <a className="item-name" to="#">
              {name}
            </a>
            <span className="item-price">${price}</span>
            <span className="item-quantity">Quantity: 01</span>
          </li>
        </ul>
        <div className="text-center">
        
          <i className="btn btn-black-galacy m-t-5"
            onClick={() => dispatch(remove(product))}
          >
            Remove
          </i>
          <a to="#" className=" btn btn-green  m-t-5">
            <i className="an an-cart"></i> view cart
          </a>
        </div>
      </div>

      <a id="cart" className="text-right btn">
        <i className="an an-shopping-bag an-2x"></i>3 Items | $ 0.00
      </a>
    </div>
  );
};
