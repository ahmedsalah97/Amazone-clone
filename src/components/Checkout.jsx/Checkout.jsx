import React from "react";
import imageCheckout from "../../images/checkoutAd.jpg";
import { useAuth } from "../../context/GlobalState";
import "./Checkout.css";
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const { user, basket } = useAuth();
  console.log(basket);
  return (
    <>
      <div className="checkout mt-1">
        <div className="container-fluid">
          <div className="row mt-1">
            <div className="col-md-9 my-1">
              <img className="w-100 h-auto" src={imageCheckout} alt="" />
              <h4>
                <span className="fw-bolder">Hello 🖐 </span> ,
                {user ? `${user.email}` : "Guset"}
              </h4>
              <h3 className="shop-title">Your Shoping Basket</h3>
            </div>
            <div className="col-md-3 my-1">
              <Subtotal />
            </div>

            {basket.length > 0 ? (
              basket.map((item) => (
                <CheckoutProducts
                  id={item.id}
                  rating={item.rating}
                  price={item.price}
                  image={item.image}
                  title={item.title}
                />
              ))
            ) : (
              <p className="lead fs-3">
                You have no items in your basket.To buy one or more
                items,click"Add to basket".
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
