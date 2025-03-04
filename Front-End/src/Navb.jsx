import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navb() {
  return (
    <nav>
        <img src="https://t3.ftcdn.net/jpg/04/27/40/92/240_F_427409208_RTHq5PdUFnaryoZvp1TkSjYaBAAyxo7F.jpg" alt="lcarlogo" />
        <h1>Nitro-Wheels</h1>
        <ul>
            <Link to="/LandPage">Home</Link>
            {/* <Link to="/CDP">ExploreRides</Link> */}
            <Link to="/About">About Us</Link>
            <Link to="/">Logout</Link>
        </ul>
    </nav>
  )
}

export default Navb