const { name } = require("ejs");
const mongoose = require("mongoose");



//database connection
mongoose.connect("mongodb://localhost:27017/app");

// schama 
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});


const insertData = async () => {

    const userModel = mongoose.model("users", userSchema);
    const data = new userModel({ name: "saad", age: 19 });
    const result = await data.save();
    console.log(result);
}


//insertData();


const updateData = async () => {
    const userModel = mongoose.model("users", userSchema);
    const data = await userModel.updateOne(
        { name: "Mehboob" }, {
        $set: { age: 60 }
    }
    );
    console.log(data)
}

//updateData();

const deleteData = async ()=>{
    const userModel = mongoose.model("users", userSchema);
    const data = await userModel.deleteOne({
        name:"Mehboob"
    });

    console.log(data);

}

//deleteData();

const readData = async ()=>{
    const userModel = mongoose.model("users", userSchema);
     const data =await userModel.find({

     });

     console.log(data);
}

readData();
