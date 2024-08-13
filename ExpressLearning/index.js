// const { publicDecrypt } = require("crypto");
const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

// app.get("", (req,resp)=>{
    
//     resp.send("hello"+req.query);
// });


// app.get("/home", (req,resp)=>{
    
//     resp.send("hell welcome to the home page");
// });


// app.get("/about", (req,resp)=>{
    
//     resp.send("hell welcome to the about page");
// });

app.listen(5000, (req, resp )=>{
    console.log(`server listening to to port`);
});


// const publicPath = path.join(__dirname ,  "public")

// //app.use(express.static(publicPath));

// app.get("/", (req,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`);
// })

// app.get("/about", (req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`);
// })

// app.get("*", (req,resp)=>{
//     resp.sendFile(`${publicPath}/fourOFour.html`);
// })



//learning EJS Template Engine



app.set("view engine", "ejs");

app.get("", (req,resp)=>{

const Akhtar = {
    name:"Akhatar Ali",
    age:"21",
    skils:["FLutter", "dart", "Js"]
}
  resp.render('home.ejs', {Akhtar});
});

