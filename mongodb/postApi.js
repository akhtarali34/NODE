const express = require ("express");
const ConnectDB = require ("./DBconnect");
const app = express();
app.use(express.json())

app.post("/", async (req, resp)=>{
    const DB  = await ConnectDB()
    let result = await DB.insertOne(req.body);
    console.log(result);

    resp.send(req.body);
})

app.listen(5000, ()=>{
    console.log("server listenig to the port 5000");
})