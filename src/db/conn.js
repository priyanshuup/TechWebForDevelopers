const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fullweb")
.then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log("Database not Connected",e)
})

