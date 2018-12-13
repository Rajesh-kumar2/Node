const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const eventRoutes = require("./events-routes")



const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/events", eventRoutes);

app.listen(9090, ()=>{
    console.log("Rest server started at: 9090");
    
})