import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo } alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad, architecto veritatis soluta iste consequatur animi laborum dolorem quidem explicabo perferendis praesentium consectetur, expedita dicta unde natus, inventore fugit sunt.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li> 
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>1234567890</li>
                    <li><a href="mailto:contact@fooddel.com">contact@fooddel.com</a></li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">© 2024 FoodDel. All rights reserved.</p>

      
    </div>
  )
}

export default Footer
