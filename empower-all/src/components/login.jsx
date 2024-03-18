import React, { useState } from "react";
import Navbar from "./navbar";
import "./login.css";
import "bootstrap";
import loginImg from "../assets/loginImg.png";
import Footer from "./Footer";

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
      <div className="login-div">
        <h1>Log In</h1>
        <p>
          Don't have an account?{" "}
          <a href="signup" className="signupLogin">
            Register Now
          </a>
        </p>
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
        <label className="remember">
          <input type="checkbox" />
          <span className="rememberLabel">Remember Me</span>
        </label>
        <input
          type="button"
          value="Log In"
          className="loginB"
          onClick={handleSubmit}
        />
      </div>
      <img src={loginImg} className="loginImg" />
      <Footer />
    </div>
  );
};

export default Login;
