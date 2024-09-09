import React, { useState } from 'react'
import './Home.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
export const Home = () => {
  const [menu,setMenu]=useState("home");
  return (
   <>
    <div className="navbar">
          <img src={assets.logo} alt="" className="logo" id='logo'/>
     <ul className="navbar-menu" id='navv'>
         <Link onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>home</Link>
         <a href="#ExploreMenu" onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>menu</a>
         <a href="#app-downloadd" onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</a>
         <a href="#footer" onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <a href=""></a>
           <div className="icon">
           <img src={assets.basket_icon}  alt="" />
           <div className="dot"></div>
           </div>
      </div>
      <button type='button' className=' btn btn-outline-secondary' style={{color:'black',borderRadius:"20px"}}>sign-in</button>
      </div>
      
   
   </>
  )
}
