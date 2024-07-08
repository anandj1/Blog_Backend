const express = require("express")

const app = express()
require("dotenv").config()
const PORT = process.env.PORT

app.use(express.json())
const blog = require("./routes/Blog")
const dbConnect = require("./database")
dbConnect()
app.use("/api",blog)

app.listen(PORT,()=>{
    console.log("App is running")
})
app.get("/",(req,res)=>{
    res.send("<h1>Hello There is blog website</h1>")

})

