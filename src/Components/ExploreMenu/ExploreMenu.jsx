import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <>
     <div className="ExploreMenu" id="ExploreMenu">
        <h1>Explore Our Menu</h1>
        <p className='ExploreMenu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure veniam nesciunt iste. Sapiente, dolorum nesciunt! Modi placeat maxime consequuntur, culpa quas voluptates unde voluptatem delectus aliquam, iure laudantium? Odio, minima!</p>
        
        <div className="menuList">
            {menu_list.map((item,index)=>{
              return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list" id='unique'>
                   <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                   <p>{item.menu_name}</p>
                </div>
              )
            })}
            </div>
            <hr />
        </div>
     
    </>
  )
}

export default ExploreMenu