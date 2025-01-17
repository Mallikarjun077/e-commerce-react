import React from 'react'
import "./LoginSignup.css"

function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <div>
            <button>continue</button>
            <p className='loginsignup-login'>Already have a Account? <span>Login here</span></p>
            <div className="loginsignup-agree">
              <input type="checkbox" name='' id=""/>
              <p>By continuing. i agree to the terms of use & privacy policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup