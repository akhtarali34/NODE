const express = require("express");
require("./config");
const customersModel = require("./customers");


const app = express();
app.use(express.json());

app.get("/search/:key",async (req, resp)=>{
  let data = await customersModel.find({
    "$or" :[
        {"name":{$regex: req.params.key}},
        {"adress":{$regex: req.params.key}}

    ]
  })
    console.log(data);
    resp.send(data);
});


app.listen(5000, ()=>{
    console.log("server listening to the port 5000");
});