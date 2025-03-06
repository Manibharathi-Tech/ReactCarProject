import React from 'react'
import './Card.css'

function Card({ name, image, description, spec1, spec2, spec3, onClick }) {

  let img = "https://c4.wallpaperflare.com/wallpaper/575/784/986/liberty-walk-car-nissan-nissan-gt-r-wallpaper-preview.jpg"

  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-content">
          <div className="ctitle" >{name}</div>
          <div className="cdesc">{description}</div>
          <div className="cspec">
            <div className="box">{spec1}</div>
            <div className="box">{spec2}</div>
            <div className="box">{spec3}</div>
          </div>
          <button onClick={onClick}>Add to Wishlist</button> {/* Wishlist Button */}
        </div>
      </div>
    </>
  )
}

export default Card



