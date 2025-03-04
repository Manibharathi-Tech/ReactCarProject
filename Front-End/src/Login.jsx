import React, { useEffect } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import APIJsonData from './APIJsonData'



function Login() {

  //! for navigation purpose
  const navigate = useNavigate()


  //!POST Data

  const [usernamestate, setusernamestate] = useState("")
  const [passwordstate, setpasswordstate] = useState("")




  async function fnpost() {

    let newdata = {
      "Username": usernamestate,
      "Password": Number(passwordstate),
    }

    console.log(newdata);

    try {

      const loginresp = await fetch("http://localhost:5000/Login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },

        body: JSON.stringify(newdata) // sending data to body 

      });

      const result = await loginresp.json(); // promise

      if (loginresp.ok) {
        console.log("Login successful:", result);
        navigate("/LandPage");
      } else {
        console.error("Login failed:", result.error);
        alert(result.error);
      }
      
    } catch (error) {
      console.error("Error:", error);
      alert("Server Problem.");
    }
  }

  //---------------------------------------------------





  return (
    <div className='bdy'>
      <div className="cont1">
        <div className="contentpara">
          <p><i>Welcome back to NitroWheels – where speed meets precision. Log in to fuel your passion, take control, and push the limits of every ride. </i></p>
        </div>
        <div className="login-box">
          <h2 style={{ color: "white", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "35px",marginLeft:"80px" }}>Member Login</h2>
          <pre> <label >UserName</label><input type="text" placeholder="Username" onChange={(e) => { setusernamestate(e.target.value) }} /></pre>
          <div>
            <pre><label >Password</label> <input type="password" id="password" placeholder="Password" onChange={(e) => { setpasswordstate(e.target.value) }} /></pre>
          </div>

          <button  style={{background:"rgb(104, 154, 208)"}} onClick={() => { fnpost()}}>Login</button>
          <p style={{ marginTop: "30px",marginLeft:"50px"}}>
            Don't have an account? <Link style={{ color: "rgb(72, 148, 255)", textDecoration: "underline" }} to="/Signup" >SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login