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


  // Fetch data from database 
  useEffect(() => {

    fetch("http://localhost:5000/cars")

      .then((res) => { return res.json() }) // return promise

      .then((data) => { setCars(data) })   // set the db data into cars

      .catch((error) => { console.error("Not fetching cars from database") });
  }, []);

  //-----------------------------------------------------------------------------------------------------------

  const filteredCars = cars.filter(car => car.brandy === jsondata.carbrand);

  return (
    <div>
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