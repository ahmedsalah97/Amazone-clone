import React, { useEffect } from "react";
import "./Product.css";
import { useAuth } from "../../context/GlobalState";

const Product = ({ title, price, image, rating, id }) => {
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        title: title,
        price: price,
      },
    });
  };

  return (
    <>
      <div className="product ">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <i className="fas fa-star"></i>
              </p>
            ))}
        </div>
        <img src={image} alt="product-img" />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </>
  );
};

export default Product;