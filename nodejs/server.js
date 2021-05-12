const express = require('express');
const app = express();
const port = 8080;
const hostname = "localhost";
const cors = require("cors");
const pool = require("../database/database");

//Middleware cors allow to make an ajax request to a server of a different domain, esp when you want to consume 
//an API directly from the client side
app.use(cors());
//to enable to get data from client side
app.use(express.json());


app.listen(port,hostname,()=>{
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});


//Creating Routes
//1.Update information table
app.post("/updateinformation", async(req,res)=>{
    try {
      const {x_tableinfo} = req.body;
      const updateinformation = await pool.query("INSERT INTO information (x_tableinfo) VALUES($1)",[x_tableinfo]);
      res.status(200).json(updateinformation.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
});

//2.Get all information
app.get("/getallinformation", async(req,res)=>{
    try {
        const getallinformation = await pool.query("SELECT * FROM information");
        res.status(200).json(getallinformation.rows);
    } catch (error) {
        console.error(error.message);
    }

})