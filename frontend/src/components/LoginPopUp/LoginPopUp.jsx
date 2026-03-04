import React, { useState } from 'react'
import "./LoginPopUp.css"
import { assets } from '../../assets/frontend_assets/assets';
const LoginPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className='login-popup'>
       <form action="" className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="Cross icon" />
        </div>
        <div className="login-popup-input">
            {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your E-Mail' required />
            <input type="password" placeholder='Your Password' required  />

        </div>
        <button className='login-popup-btn'>{currentState==="Sign Up" ? "Create Account" : "Login"}</button>
        {
        currentState === "Sign Up"?<div className="login-popoup-condition">
            <input type="checkbox" required />
            <p>By signing up, I agree to the Terms & Conditions</p>
        </div>:<div className="login-popoup-condition"><input type="checkbox" required />
            <p>Remember me</p></div>
            
        }
        
        {currentState === "Login"
        ?<p>Create a New Account ? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
       
        : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login</span></p> 
        }
    
       </form>

      
    </div>
  )
}

export default LoginPopUp
