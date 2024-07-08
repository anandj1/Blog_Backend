const mongoose = require("mongoose")

 const dbConnect=()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Db connection succesfull")
    })
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    })

}
module.exports = dbConnect
