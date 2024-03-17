import React from 'react'
import Navbar from './navbar';
import "./login.css";

const login = () => {
  return (
    <div className='login-container'>
      <Navbar></Navbar>
      <div className='login-div'>
        <h1>Log In</h1>
        <p>Don't have an account? Register Now</p>
        <div className='input-label'>
            Username
        </div>
        <input type="text" className="username"/>
        <div className='input-label'>
            Password
        </div>
        <input type="password" className="password"/>
        <label>
        <input type="checkbox" />Remember Me</label>
        </div>
    </div>
  )
}

export default login
