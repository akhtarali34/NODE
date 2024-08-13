const http = require("http");
const data = require("./data");

http.createServer((req,resp)=>{
    //resp.writeHead(200, {"content-type": "application\json"});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000,()=>{
    console.log("Server listening to thr port no 5000")
})