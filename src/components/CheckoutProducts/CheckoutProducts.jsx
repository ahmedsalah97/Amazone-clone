import React from "react";
import "./CheckoutProducts.css";
import { useAuth } from "../../context/GlobalState";

const CheckoutProducts = ({ id, title, image, price, rating }) => {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <section>
      <div className="checkoutProduct  mt-4">
        <div className="row p-4 bg-white">
          <div className="col-md-2">
            <img className="w-100" src={image} alt="" />
          </div>
          <div className="col-md-10">
            <p className="lead fw-bold">{title}</p>
            <small>$</small>
            <strong>{price}</strong>
            <div className="product-rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>
                    <i className="fas fa-star"></i>
                  </p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutProducts;
