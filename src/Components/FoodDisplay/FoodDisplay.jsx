
import { useContext } from 'react'
import { food_list } from '../../assets/assets'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import { FoodItem } from '../Fooditem/FoodItem'
export const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <>
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                     return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
        </div>
      </div>
    </>
  )
}
