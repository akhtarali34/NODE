const express = require("express");
require("./config");
const customersModel = require("./customers");


const app = express();
app.use(express.json());

app.delete("/delete",async (req, resp)=>{
    let data = await customersModel.deleteOne({name:"Akhtar Ali"})
    console.log(data);
    resp.send(data);
});


app.listen(5000, ()=>{
    console.log("server listening to the port 5000");
});