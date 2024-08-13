const express = require ("express");
const middleWare = require("./middlware");




const app = express();



app.use(middleWare);

app.get("/", (req, resp)=>{
    resp.send("hello from home page");
});


app.get("/about", (req, resp)=>{
    resp.send("hello from about page");
});

app.listen(5000, ()=>{
    console.log("server listening to the port 300")
});