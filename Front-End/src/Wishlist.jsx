import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import Navb from "./Navb";
import Footer from "./Footer";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  // Fetch wishlist data from database
  useEffect(() => {
    fetch("http://localhost:5000/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data))
      .catch((error) => console.error("Error fetching wishlist:", error));
  }, []);



  //  Remove data from wishlist
  const removeFromWishlist = (id) => {
    fetch(`http://localhost:5000/wishlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setWishlist(wishlist.filter((car) => car._id !== id)); //  Update frontend state
        alert("Removed from wishlist!");
      })
      .catch((error) => console.error("Error removing from wishlist:", error));
  };



  return (
    <>

      <div className='navabw'>
        <Navb />
      </div>

      <h2 style={{ marginLeft: "700px",position: "relative", top: "50px" }}>My Wishlist</h2>
      <div className="wishlist-container">
        {wishlist.length > 0 ? (
          wishlist.map((car) => (
            <div key={car._id} className="wishlist-card">
              <img style={{ height: "400px", width: "600px" }} src={car.image} />
              <h3>{car.name}</h3>
              <p>{car.description}</p>

              <button onClick={() => removeFromWishlist(car._id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
      
      <div className="footerw">
      <Footer/>
      </div>
      
    </>

  );
}

export default Wishlist;
