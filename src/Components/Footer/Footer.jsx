import React from 'react'
import './Footer.css'
import '../../assets/assets'
import { assets } from '../../assets/assets'
export const Footer = () => {
  return (
  <>
  <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-left">
           <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos id repellendus delectus ducimus tempora dolores, modi doloremque. Distinctio, eaque porro? Iusto doloribus modi corporis explicabo, blanditiis voluptas quam accusamus?</p>
           <div className="footer-icons-social">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-right">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-centre">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+1-232-42652-436</li>
            <li>contact@mikey.com</li>
           </ul>
        </div>
    </div>

  <hr />
  <p className='footer-text'>Copyrights 2024 © Mikey.com -All Rights Reserved.</p>
  </div>
  </>
  )
}
