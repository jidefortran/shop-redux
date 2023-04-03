import React from "react";
import useTitle from "../hooks/useTitle.js";
import { Card } from "../component/Card.js";

export function Home({ title }) {
  const products = [
    {
      id: 1,
      name: "Nike revolution",
      price: 129,
      image: "../assets/img/1.png",
    },
    {
      id: 2,
      name: "Nike Slim fit",
      price: 409,
      image: "../assets/img/2.png",
    },
    {
      id: 3,
      name: "Nike FlashBack",
      price: 230,
      image: "../assets/img/3.png",
    },
    {
      id: 4,
      name: "Nike Turbo Speed",
      price: 500,
      image: "../assets/img/5.png",
    },
    { id: 5, name: "Air Jordan", price: 209, image: "../assets/img/5.png" },
    { id: 6, name: "Reebok", price: 129, image: "../assets/img/4.png" },
  ];

  useTitle(title);
  return (
    <div className="homeLayout">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
