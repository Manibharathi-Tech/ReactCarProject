import React, { useEffect, useState } from 'react'
import './CarData.css';
import Card from './Card'
// import { cars } from "./assets/CarJsonData";
import { useLocation } from 'react-router';
import Navb from './Navb';


function CarData() {

  const location = useLocation();
  const jsondata = location.state || {}; // Default to empty object if no data

  const [cars, setCars] = useState([])

  console.log(jsondata.carbrand);


  // Fetch cars data from carsjson 
  useEffect(() => {

    fetch("http://localhost:5000/cars")

      .then((res) => { return res.json() }) // return promise

      .then((data) => { setCars(data) })   // set the db data into cars

      .catch((error) => { console.error("Not fetching cars from database") });
  }, []);

  //-----------------------------------------------------------------------------------------------------------

  const filteredCars = cars.filter(car => car.brandy === jsondata.carbrand);

  //  Function to add car to wishlist
  const addToWishlist = (car) => {

    fetch("http://localhost:5000/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...car}), //  using Spread Operator
    })
    .then((res) => res.json())

    .then((data) => {
        if (data.message === "Car already in wishlist") {
            alert("Car is already in wishlist");
        } else {
            alert("Car added to wishlist");
        }
    })
    .catch((error) => console.error("Error adding to wishlist:", error));
};






  return (
    <div className='maintag'>
      <div className="navstyle">
        <Navb />
      </div>
      <div className="container" >
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <Card
              key={car._id}
              name={car.name}
              description={car.description}
              image={car.image}
              spec1={car.specs1}
              spec2={car.specs2}
              spec3={car.specs3}
              onClick={() => addToWishlist(car)} // Add to wishlist on click
            />
          ))
        ) : (
          <p>No cars available for the selected brand.</p>
        )
        }
      </div>
    </div>
  )
}

export default CarData