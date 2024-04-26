import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/GlobalState";
import "./Subtotal.css";
import { getBasketTotal } from "../../context/AppReduser";

const Subtotal = () => {
  const navigate = useNavigate();
  const { basket } = useAuth();
  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items) :{" "}
                <small className="fw-bolder">{value}</small>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button onClick={() => navigate("/payment")}>
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default Subtotal;
