import React, { useContext } from "react";
import {useSelector} from "react-redux"
import { CartContext } from "../context/CartContext";
import useTitle from "../hooks/useTitle";
import { CartCard } from "../component/CartCard";
// import { useCart } from "../context/CartContext";
export function Cart({ title }) {
  // const {total, cartList} = useContext(CartContext)
  // const { total, cartList } = useCart();


  const products= useSelector(state => state.cartState.cartList)
  const theTotal = useSelector(state=> state.cartState.total)
  // const products = [
  //   {
  //     id: 1,
  //     name: "Nike revolution",
  //     price: 129,
  //     image: "../assets/img/1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Nike Slim fit",
  //     price: 409,
  //     image: "../assets/img/2.png",
  //   },
  // ];
  useTitle(title);

  return (
    <div>
      <h3>
        {" "}
        Cart Items: {products.length} / Total : ${theTotal}
      </h3>
      {products.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  );
}
