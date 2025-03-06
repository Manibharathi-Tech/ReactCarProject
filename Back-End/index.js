//! MONGO DB CONNECTION
const { MongoClient } = require("mongodb")
const url = 'mongodb://localhost:27017'
const dbName = "CARS"
let db;


//! API PROVIDER
const express = require("express")
const path = require("path")
const PORT = 5000
const cors = require("cors")
const app = express();

//! MiddleWare
app.use(cors());  // cross origin
app.use(express.json()) //Converts JSON into JavaScript objects.



//! connect to MongoDB
async function connectdb() {
    try {
        const client = new MongoClient(url);

        await client.connect();

        console.log("mongodb connected");
        db = client.db(dbName);
    } catch (err) {
        console.error("mongodb not Connection ", err);
    }
}

connectdb();



//ALL the API

//!login API
app.post("/Login", async (req, res) => {

    try {

        if (!db) {
            return res.status(404).json({ error: "Database not connected" });
        }

        const { Username, Password } = req.body;

        if (!Username || !Password) {
            return res.status(404).json({ error: "All fields are required" });
        }

        const collection = db.collection("user");
        const databaseuser = await collection.findOne({ Username });  // find the data from the database

        if (!databaseuser) {
            return res.status(404).json({ error: "User not found. Please Sign Up" });
        }

        if (databaseuser.Password !== Password) {
            return res.status(404).json({ error: "Incorrect password" });
        }


        res.status(200).json({ message: "Login successful" });

    } catch (error) {
        console.error("Login Error");
        res.status(404).json({ error: "server problem" });
    }



});

//!SignUp API
app.post("/Signup", async (req, res) => {

    try {

        if (!db) {
            return res.status(404).json({ error: "Database not connected" });
        }

        const { Username, Password } = req.body;


        if (!Username || !Password) {
            return res.status(404).json({ error: "All fields are required" });
        }

        const collection = db.collection("user");   //collection name
        const databaseuser = await collection.findOne({ Username });  // find the data from the database

        if (databaseuser) {
            return res.status(404).json({ error: "UserName Is Already Exist" });
        }

        collection.insertOne(req.body);  // storing the data in MongoDB


        res.status(200).json({ message: "SignUp successful", user: databaseuser });

    } catch (error) {
        console.error("Login Error");
        res.status(404).json({ error: "server problem" });
    }

});

//! Sending All data to DataBase

app.post("/Loadjsondata", async (req, res) => {

    try {

        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const carsdata = req.body;

        const collection = db.collection("carsjson"); // collection name

        collection.insertMany(carsdata);  // storing the data in MongoDB

        res.status(200).json({ message: "Cars added successfully" });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "server problem" });
    }

});


//! Fetching data from the database

app.get("/cars", async (req, res) => {


    try {

        const collection = db.collection("carsjson");  // collection name

        const cars = await collection.find().toArray();  // the data fetched from the database

        res.status(200).json(cars);

    } catch (err) {
        res.status(404).json({ message: "cars Not fetching " });
    }

});


//!-----------------------------

//! Get The data From the Whislist collection

app.get("/wishlist", async (req, res) => {
    try {
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const collection = db.collection("wishlist"); // collection name
        const wishlist = await collection.find().toArray();

        res.status(200).json(wishlist);
    } catch (error) {

        res.status(500).json({ error: "Failed to fetch wishlist items" });
    }
});

//! Add a specific car to wishlist
app.post("/wishlist", async (req, res) => {
    try {
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const collection = db.collection("wishlist"); //  collection name
        const car = req.body;

        // Check if the car is already in the wishlist
        const existingCar = await collection.findOne({ _id: car._id });
        if (existingCar) {
            return res.status(400).json({ message:"Car already in wishlist" });
        }

        await collection.insertOne(car);
        res.status(200).json({ message:"Added to wishlist"});
        
    } catch (error) {
        res.status(500).json({ error:"Failed to add to wishlist" });
    }
});

//!  Remove a car from wishlist
app.delete("/wishlist/:id", async (req, res) => {
    try {
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const { id } = req.params;
        const collection = db.collection("wishlist"); //  Correct collection reference

        await collection.deleteOne({ _id: id }); // Fix deletion logic
        res.status(200).json({ message: "Item removed from wishlist" });
    } catch (error) {
        res.status(500).json({ error: "Failed to remove item" });
    }
});



//Listening port address

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});