import React, { useState } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import "./login.css";
import "bootstrap";
import loginImg from "../assets/loginImg.png";
import Footer from "./Footer";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import or from "../assets/or.png"

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted");
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="mainLoginContainer">
        <div className="loginDiv">
          <h1>Login</h1>
          <p>Log In using social networks<br/>
          </p>
          <div className="social-icons">
          <a target="_blank" href="https://www.google.com"><img src={google} className="google"/></a><a target="_blank" href="https://www.facebook.com"><img src={facebook}/></a>
          </div>
          <img src={or} className="or"/>
          <div className="input-label">Username</div>
        <input
          type="text"
          className="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={validateForm}
        />
        {errors.username && <span className="error">{errors.username}</span>}
        <div className="input-label">Password</div>
        <input
          type="password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validateForm}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <button type='button' className="loginbutton">
          Login 
        </button>
        
        </div>
        <div className="signUpLogin">
          <h1>New Here?</h1>
          <p>
          Sign Up and discover a great amount of new opportunties
          </p>
          {/* <button type="button" className="signUpLoginButton">Sign Up</button> */}
          <Link to="/signup"
                    style={{
                      marginTop: "40px",
                      backgroundColor: "#FFECD1",
                      border: "none",
                      borderRadius: "10.1px",
                      height: "60px",
                      width: "200px",
                      color: "#083D32",
                      fontSize: "15px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                    }}
                  >
                    Sign Up
                  </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
