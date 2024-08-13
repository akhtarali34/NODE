const ConnectDB = require("./DBconnect");


const update  = async ()=>{
    const data = await ConnectDB();
    const reslt = await data.updateMany(
       {name:"Ali"}, {
        $set:{age:"70"}
       } 
    );

    console.log(reslt);

}

update();