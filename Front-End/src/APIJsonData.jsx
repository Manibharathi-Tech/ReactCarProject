import React from 'react'
import { cars } from './assets/CarJsonData'

function APIJsonData() {

    //!POST Data

  async  function postData() {
        

    let newdata = cars

    console.log(newdata);


   await fetch("http://localhost:5000/Loadjsondata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata)
    })
        .then((data) => {
            if (data.ok) {
                return data.json() // return promise
            }
        }).then((res) => {
            console.log(res);
            alert("Data Added Successfully")

        })
        .catch((error) => {
            console.log(error);
            alert("Data Not Added")
        });


    }



    return (
        <>
        <div>APIJsonData</div>
        <button onClick={postData}>Upload Data</button>
        </>  
    )
}

export default APIJsonData