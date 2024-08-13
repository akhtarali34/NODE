const express = require("express");
require("./config");
const customersModel = require("./customers");


const app = express();
app.use(express.json());

app.post("/create",async (req, resp)=>{
    let data =  new customersModel(req.body);
    let result = await data.save();
    console.log(req.body);
    resp.send(result);
});


app.listen(5000, ()=>{
    console.log("server listening to the port 5000");
});