const express = require("express");
const ConnectDB = require("./DBconnect");
const mongodb = require("mongodb");


const app = express();
app.use(express.json());


app.delete("/:id", async (req,resp)=>{
    const Db = await ConnectDB();
    const response = await Db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});

    resp.send(response);

})

app.listen(5000,()=>{
    console.log("server listening to the port 5000");
})
