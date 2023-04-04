import React from 'react'
import { Link } from 'react-router-dom';
import './styles/signin.css';

export default function Signin() {
  return (
    <div className='signin-container'>
      <form className='signin-form'>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" />
        </div>
        <Link to="/signup">New User? SIGNUP</Link>
        <Link to="/home"><button type="submit" className="btn btn-primary">Sign In</button></Link>
      </form>
    </div>
  )
}
