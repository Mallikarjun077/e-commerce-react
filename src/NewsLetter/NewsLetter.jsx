import React from 'react'
import "./NewsLetter.css"

function NewsLetter() {
  
  return (
    <div className='newsletter'>
        <h1>Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated </p>
        <div>
            <input type="email" placeholder='Enter Email id' className='email'/>
            <button >Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter