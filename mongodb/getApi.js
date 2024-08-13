const express = require("express");
const ConnectDB = require("./DBconnect");
 const app = express();


 const getData =async ()=>{
    let DB = await ConnectDB();
    let result = await DB.find({}).toArray();
    return result;
 }
 app.get("/",async (req, resp)=>{
    let data = await getData();
    resp.send(data);
 });


 app.listen(5000, ()=>{
    console.log("Server is listening to the port 5000");
});