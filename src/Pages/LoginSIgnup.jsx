import React from 'react'
import './CSS/LoginSignup.css'

const LoginSIgnup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name'/>
            <input type="email"  placeholder='EMail Address'/>
            <input type="password" placeholder='Password'/>
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an acount?<span>Login Here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By Continuing, I agree to use in terms of use and privacy </p>
          </div>
        </div>
      </div>
      
  )
}

export default LoginSIgnup
