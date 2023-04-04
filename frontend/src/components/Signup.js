import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './styles/signup.css';
import CSRFToken from './CSRFToken';
import axios from "axios";

export default function Signup() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const signup_api = async() => {
    const email = document.getElementById('exampleInputEmail1').value
    const password = document.getElementById('exampleInputPassword1').value
    setemail(email)
    setpassword(password)

    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/accounts/signup/',
      data: {
        email: email,
        password: password,
      }
    });
  }

  return (
      <div className='signup-container'>
        <form className='signup-form' action='/accounts/signup/' method='POST'> <CSRFToken />
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" />
          </div>
          <Link to="/">Already a User? SIGNIN</Link>
          {/* <Link to="/home"><button type="submit" class="btn btn-primary">Sign Up</button></Link> */}
          <button type="submit" className="btn btn-primary" /* onClick={signup_api} */>Sign Up</button>
        </form>
      </div>
  )
}
