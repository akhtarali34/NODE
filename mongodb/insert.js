const ConnectDB = require("./DBconnect");


const insert =async ()=>{
    const DB = await ConnectDB();
    const add = await DB.insertMany([
        {name:"usman", age:"43"},
        {name:"ahmad", age:"43"},
        {name:"murad", age:"43"}
    ]);

    if(add.acknowledged){
        console.log("Data sucessfully added");
    }
}

insert();

