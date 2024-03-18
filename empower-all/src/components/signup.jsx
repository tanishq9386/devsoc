import React, { useState } from 'react';
import Navbar from "./navbar";
import Footer from './Footer';
import loginImg from "../assets/loginImg.png";
import "./signup.css";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="signup-div">
        <h1>Sign Up</h1>
        <p>Already have an account? <a href="login" className="signupLogin">Log In</a></p>
        <div className="input-label">Username</div>
        <input 
          type="text" 
          className="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={validateForm}
        />
        {errors.username && <span className="error">{errors.username}</span>}
        <div className="input-label">Email</div>
        <input 
          type="text" 
          className="username" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateForm}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <div className="input-label">Password</div>
        <input 
          type="password" 
          className="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validateForm}
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <div className="input-label">Confirm Password</div>
        <input 
          type="password" 
          className="password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validateForm}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        <input type="button" value="Register" className="loginB" onClick={handleSubmit} />
      </div>
      <img src={loginImg} className="loginImg" alt="Signup" />
      <Footer/>
    </div>
  );
};

export default Signup;
