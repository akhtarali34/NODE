const { isUtf8 } = require("buffer");
const appjs = require("./app.js");

// console.log(appjs.c);


// const arr = [23,1318,19];

// result = arr.filter((item)=>{
//    return item>18;
// })

// console.log(result);





// //  CREATING FIRST SERVER
// const http = require ("http");


// http.createServer((req,res)=>{
// res.write("hello server");
// res.end();
// }).listen(5000, ()=>{
//    console.log("Server running at the port ")
// });




// File system crud operation


const fs = require("fs");
const path = require("path");
const { error } = require("console");

const dirPath = path.join(__dirname, "fsCrud");

const filePath = dirPath+"/newFile.text";

//fs.writeFileSync(filePath, "This is new file created with file system");     File crated succesfully at the distination

// fs.readFile(filePath, "utf-8", (error , item)=>{
//    console.warn(item);
// })                                                                           File data read sucessfully

// fs.appendFile(filePath," this data is going to be append on", (error)=>{
//     console.log(error);
// });                                                                          Data is appended on the file



// fs.rename(filePath, dirPath + "/apple.txt" , (error)=>{
//    if(!error ) console.log("fileupdated ");
// })


// fs.unlinkSync(dirPath+"/apple.txt", (error)=>{
//     if(!error) console.log("file deleted");
// })

// console.log("first output")
// setTimeout(()=>{
//     console.log("delayed outpu");
// },2000);


// console.log("third output");