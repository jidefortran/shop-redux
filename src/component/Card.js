import React, {useState, useEffect } from "react";
// import { CartContext , useCart } from "../context/CartContext";
import { add, remove } from "../stores/cartSlice";
import { useDispatch, useSelector } from "react-redux";
export function Card({ product }) {
  //  allows you to have access to this method
  // const { addToCart, cartList, removeFromCart } = useCart();
  const { id, name, price, image } = product;
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find((Item) => Item.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <main>
      <div className="card card--solstice">
        <div className="card__header card__header--solstice">
          <div className="card__watermark" data-watermark="Classic"></div>

          <img
            src="https://i.ibb.co/q7RKcZk/nike.png"
            alt="Nike"
            className="card__logo card__will-animate"
          />

          <span className="card__price card__will-animate">{price}</span>

          <h1 className="card__title card__will-animate">{name}</h1>
          <span className="card__subtitle card__will-animate">
            The Nike Air Solstice draws inspiration from the swoosh's classic
            running shoes of the 1980's updating the style with premium
            materials and impressive production quality.
          </span>
        </div>

        <div className="card__body">
          <img
            src={image}
            alt={name}
            className="card__image card__will-animate"
          />
         {isInCart ?    
          <button
            onClick={()=>dispatch(remove(product))}
            className="card__wish-list card__wish-list--remove card__will-animate remove"
          >
            Remove
          </button>
          :
          <button
            onClick={() => dispatch(add(product))}
            className="card__wish-list card__wish-list--solstice card__will-animate"
          >
            Add to Cart
          </button>
}
          <span className="card__category card__will-animate">Men's shoe</span>
        </div>
      </div>
    </main>
  );
}
