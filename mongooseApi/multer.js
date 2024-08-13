const multer = require ("multer");
const express = require("express");


const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file , cb){
            cb(null,"uploads")
        },

        filename : function(req, file , cb){
            cb(null, file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("upload_file")


app.post("/",upload,(req, resp)=>{
    resp.send("file uploaded");
})

app.listen(5000,upload, ()=>{
    console.log("Server Listening to the port 5000");

})