import { Route, Routes } from "react-router-dom";
import CarData from "./CarData.jsx";
import App from "./App.jsx";
import Login from "./Login.jsx";
import About from "./About.jsx";
import Signup from "./Signup.jsx"
import APIJsonData from "./APIJsonData.jsx";
import Wishlist from "./Wishlist.jsx";



function Routers() {
  return ( 
    <Routes>
      <Route path="/" element={<Login/>} ></Route>
      <Route path="/LandPage" element={<App/>} ></Route>
      <Route path="/CDP" element={<CarData/>} ></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      {/* <Route path="/Dataload" element={<APIJsonData/>}></Route> */}
    </Routes>
  )
}

export default Routers
