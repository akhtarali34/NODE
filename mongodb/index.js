const ConnectDB = require("./DBconnect");


////////////////////////////////////////////Handeling throgh promises
// ConnectDB().then((response)=>{
//     response.find().toArray().then((data)=>{
//         console.warn(data);
//     });
// });



/////////////////////HANDLING THROUGH ASYNC FUNCTIONS
const main = async ()=>{
    let data = await ConnectDB();
    let respnse = await data.find().toArray();
    console.log(respnse);
}
main();