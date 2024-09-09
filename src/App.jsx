import { Home } from "./Components/Home"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import HomePage from "./Pages/Home/HomePage";
import CartItem from "./Pages/Cart/CartItem";
import Header from "./Components/Header/Header";
import ExploreMenu from "./Components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import { FoodDisplay } from "./Components/FoodDisplay/FoodDisplay";
import { Footer } from "./Components/Footer/Footer";
import { Appdownload } from "./Components/Appdownload/Appdownload";
function App() {
  const [category,setCategory]=useState("All");
   return (
    <>
     <Home/>
     <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/Home' element={<CartItem/>}/>
     <Route path='/' element={<PlaceOrder/>}/>
     </Routes>
     <Header/>
     <ExploreMenu category={category} setCategory={setCategory}/>
     <FoodDisplay category={category}/>
     <Appdownload/>
     <Footer/>
    </>
  )
}

export default App
