import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, image, rating, price, id }) {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("this is basket", basket);
  const addToBasket = () => {
    {
      user
        ? dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            },
          })
        : alert("Sign in ");
    }
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt=""></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
