import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginLogo from "../../images/login-logo.png";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase.js";

const Login = () => {
  const navigate = useNavigate();
  const [iserror, setIserror] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        setIserror(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        setIserror(error.message);
      });
  };
  return (
    <>
      <div className="login">
        <Link to={"/"}>
          <img className="login-logo" src={LoginLogo} alt="LogoLogIn" />
        </Link>
        <div className="login-container">
          {iserror != null ? (
            <div className="alert alert-danger text-center p-1">
              <h6>{iserror}</h6>
            </div>
          ) : (
            ""
          )}
          <h1>Sign In</h1>
          <form action="">
            <h5 htmlFor="email">Email</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5 htmlFor="password">Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="login-signInBtn" onClick={signIn}>
              Sign In
            </button>
            <p>
              By continuing, you agree to Amazon's Fake Clone Conditions of Use
              and Privacy Notice.
            </p>
            <button className="login-registerBtn" onClick={register}>
              Create your Amazon Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
