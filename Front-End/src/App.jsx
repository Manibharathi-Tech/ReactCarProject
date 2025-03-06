import React, { useState } from 'react'
import './App.css'
import img from "./assets/Pica-enhance-20250221111352.png";
import { useNavigate } from "react-router-dom";
import Navb from './Navb';
import Footer from './Footer';



function App() {

  let carpic = "https://c4.wallpaperflare.com/wallpaper/840/954/346/dark-night-rain-car-wallpaper-preview.jpg"
  let picture = {
    "image1": "https://media.gettyimages.com/id/82719864/photo/man-filling-car-with-diesel-pump.jpg?s=1024x1024&w=gi&k=20&c=MbFK4lonlig5sReLHISxUNbbzL3WArQJqiiKorP_QZk=",
    "image2": "https://files.oaiusercontent.com/file-18ps164axT1oj4F5P2NmXe?se=2025-03-01T13%3A13%3A08Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D742c6105-c430-4905-849d-9f497e1a8c89.webp&sig=lDjy9WyfsXq3nMyoIgq8jbO4i6jQRJZsZ6kL5UD0s/o%3D",
    "image3": "https://i.pinimg.com/736x/13/60/99/1360990586fc583ee4aaf50345e2b636.jpg"
  }


  const [brandstate, setbrandstate] = useState([])


  const [picturestate, setpicturestate] = useState(picture)
  const [urlstate, seturlstate] = useState("")

  const [ctypestate, setctypestate] = useState("")
  const [bstate, setbstate] = useState("")

  const [pricestate, setpricestate] = useState("")

  const [specstate, setspecstate] = useState([])
  const [sstate, setsstate] = useState("")


  function fncartype(e) {

    let ctype = e.target.value

    if (ctype == "Diesel") {
      setctypestate(ctype)
      setbrandstate(["Toyota", "Mahindra", "Hyundai"])
      seturlstate(picture.image1);
    }
    else if (ctype == "Petrol") {
      setctypestate(ctype)
      setbrandstate(["Audi", "BMW", "Benz"])
      seturlstate(picture.image2);
    }
    else if (ctype == "EV") {
      setctypestate(ctype)
      setbrandstate(["MG", "KIA", "Tesla"])
      seturlstate(picture.image3);
    } else {
      setbrandstate([]);
      seturlstate("");
    }
    setbstate("")
    setpricestate("")
    setsstate("")
  }

  function fnbrand(ele) {
    let cbrand = ele.target.value
    console.log(cbrand);

    brandstate.map((item, index) => {
      if (item === cbrand) {
        setbstate(cbrand)
      }
    });
  }

  function fncarprice(e) {

    let pricedata = e.target.value

    if (pricedata <= 1000000) {
      setpricestate(pricedata);
      setspecstate(["ABS with EBD", "Rear parking sensors", "Manual AC"])
    }
    else if (pricedata <= 5000000 && pricedata > 1000000) {
      setpricestate(pricedata)
      setspecstate(["Automatic climate control", "ISOFIX child seat anchors", "Electronic Stability Program"])
    }
    else if (pricedata >= 10000000) {
      setpricestate(pricedata)
      setspecstate(["Carbon Fiber", "Smart AI", "Customizable Interior"])
    } else {
      setpricestate("");
      setspecstate([])
    }
    setsstate("")
  }

  function fncarspec(e) {
    let specdata = e.target.value

    specstate.map((item, index) => {
      if (specdata === item) {
        setsstate(specdata)
      }
    })

  }

  let jsondata = { "carbrand": bstate }

  console.log(jsondata.carbrand);

  //! for navigation purpose
  const navigate = useNavigate();

  function fncardata() {
    navigate("/CDP", { state: jsondata });
  }

  return (
    <>

      <div>
        <Navb />
      </div>
      <div className="image-slider"></div>

      <div className="outer" style={{ backgroundSize: "cover" }}>
        <div className="inner" style={{ backgroundImage: `url(${urlstate})` }}>

          <table style={{ height: "600px", width: "900px" }}>
            <tbody>
              <tr>
                <td>
                  
                  <div className='con1' >
                    <h3 id='cdid'><i>Car Details</i></h3>
                    <form action="" id='f1' autoComplete='off'>

                      <label>Type</label><input type="text" value={ctypestate} readOnly /><br />
                      <br />
                      <label>Brand</label><input type="text" value={bstate} readOnly /><br />
                      <br />
                      <label>Price</label><input type="text" value={pricestate} readOnly /><br />
                      <br />
                      <label>Specs</label><input type="text" value={sstate} readOnly /><br />
                    </form>
                  </div>
                </td>

                <td>
                  <div className="con2">
                    <select name="" id="" value={ctypestate} onChange={(e) => { fncartype(e) }}>
                      <option value="">Select Car-Type</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Petrol">Petrol</option>
                      <option value="EV">EV</option>
                    </select>

                    <select name="" id="" onChange={(ele) => { fnbrand(ele) }}>
                      <option value="">Select Brand</option>
                      {brandstate && brandstate.map((brand, index) => (
                        <option key={index} value={brand}>{brand}</option>
                      ))}
                    </select><br />

                    <select name="" id="" onChange={(e) => { fncarprice(e) }}>
                      <option value="">Select Price</option>/
                      <option value="1000000">10,00,000</option>
                      <option value="5000000">50,00,000</option>
                      <option value="10000000">1,00,00,000</option>
                    </select>

                    <select name="" id="" onChange={(e) => { fncarspec(e) }}>
                      <option value="">Select Car-Spec</option>

                      {specstate && specstate.map((sp, ix) => (
                        <option key={ix} value={sp}>{sp}</option>
                      ))}

                    </select><br />
                    <button style={{ marginTop: "60px" }} onClick={fncardata} disabled={!bstate}>Explore</button>
                  </div>
                </td>

                <td>
                <img src="https://i.pinimg.com/736x/5c/56/7f/5c567f308bb36977bf9ad1ac349c103b.jpg" style={{height:"596px",width:"500px",marginLeft:"126px",border:"3px solid white"}} alt="" />
                </td>

              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App


