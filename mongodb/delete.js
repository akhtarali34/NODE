const ConnectDB = require("./DBconnect");


const deleteRecord =async  ()=>{
   const db = await ConnectDB();
   const result = await db.deleteMany({
    name:"Ali"
   });

   console.log(result);
}

deleteRecord();