import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

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
  
        const loginresp = await fetch("http://localhost:5000/Signup", {
  
          method: "POST",
          headers: {
            "Content-Type": "application/json",
  
          },
  
          body: JSON.stringify(newdata) // sending data to body 
  
        });
  
        const result = await loginresp.json(); // promise
  
        if (loginresp.ok) {
          console.log("SignUp successful");
          navigate("/LandPage");
        } else {
          console.error("SignUp failed");
          alert(result.error);
        }
        
      } catch (error) {
        console.error("Error:", error);
        alert("Server Problem.");
      }
    }
  
    //---------------------------------------------------
  
  



    return (
        <div className='bdy1'>
      <div className="cont11">
        <div className="contentpara1">
          <p><i>Join NitroWheels and unlock the ultimate driving experience. Sign up now to embrace the thrill, feel the power, and race beyond boundaries!  </i></p>
        </div>
        <div className="login-box1">
          <h2 style={{ color: "white", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "35px",marginLeft:"80px" }}>Create Account</h2>
          <pre> <label >UserName</label><input className='inputs' type="text" placeholder="Username" onChange={(e)=>{setusernamestate(e.target.value)}}  /></pre>
          <div>
            <pre><label >Password</label> <input className='inputs' type="password" id="password" placeholder="Password" onChange={(e)=>{setpasswordstate(e.target.value)}} /></pre>
          </div>

          <button style={{marginLeft:"90px"}} onClick={()=>{fnpost()}}>SignUp</button>
          <p style={{ marginTop: "30px",marginLeft:"50px"}}>
          Already have an account?
          
          <Link  style={{ color: "rgb(72, 148, 255)", textDecoration: "underline" }} to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>

    )
}

export default Signup