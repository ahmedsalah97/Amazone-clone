import React, { Suspense, lazy, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import CheckoutProducts from "./components/CheckoutProducts/CheckoutProducts";
import Checkout from "./components/Checkout.jsx/Checkout";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "./context/GlobalState";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";
// Lazy
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./components/Home/Home"));

function App() {
  const stripePromise = loadStripe(
    "pk_test_51OlGV6I3m4Pw5tsOxqDwBAqaCQCc3ugByu5EblIw2Si21XldlO5ZWp0cWy5uvqfXdwSseYkkpkWomexVuTbjoceT00xL4PZxmQ"
  );
  const { dispatch, basket } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  let routes = createHashRouter([
    { path: "login", element: <Login /> },
    {
      path: "payment",
      element: (
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
      ),
    },

    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div
              style={{ marginTop: "300px" }}
              className="d-flex align-items-center justify-content-center"
            >
              Loading please wait ...
            </div>
          }
        >
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <div
                  style={{ marginTop: "300px" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  Loading please wait ...
                </div>
              }
            >
              <Home />
            </Suspense>
          ),
        },
        { path: "*", element: <NotFound /> },
        { path: "CheckoutProducts", element: <CheckoutProducts /> },
        { path: "Orders", element: <Orders /> },

        { path: "Checkout", element: <Checkout /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
