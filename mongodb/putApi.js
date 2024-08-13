const { name } = require("ejs");
const ConnectDB = require("./DBconnect");
const DBconnect = require("./DBconnect");
const express = require("express");

const app = express();
app.use(express.json());


app.put("/:name",async  (req, resp)=>{
    const DB = await ConnectDB();
    const result = await DB.updateOne({name:req.params.name},{
        $set:req.body
    })

    resp.send({name:"updated"});

    console.log(result);

});

app.listen(5000, ()=>{
    console.log("server listening to the port 5000");
});


