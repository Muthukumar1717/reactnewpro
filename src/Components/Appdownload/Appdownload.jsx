import React from 'react'
import './Appdownload.css'
import '../../assets/assets'
import { assets } from '../../assets/assets'
export const Appdownload = () => {
  return (
   <>
   <div className="app-download" id="app-downloadd">
    <p>For Better Experience Download <br/> Tomato App</p>
    <div className="app-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
   </div>
   </>
  )
}
