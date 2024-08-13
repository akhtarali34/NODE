const express = require ("express");
const EventEmitter = require("events");


const app = express();
const events =new EventEmitter();
var count = 0;

events.on("newEvent", (req, resp)=>{
    count ++;
  console.log("event called" , count);
})

app.get("/", (req, resp)=>{
    resp.send("helllo");
    events.emit("newEvent");
})

app.post("/", (req, resp)=>{
    resp.send("helllo");
    events.emit("newEvent");
})


app.put("/", (req, resp)=>{
    resp.send("helllo");
    events.emit("newEvent");
})

app.listen(6000, ()=>{
    console.log("server listening to the port 6000");
})