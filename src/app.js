const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
require("./db/conn")
const usercont = require("./models/usermessage")

const app = express()
const port = process.env.PORT || 8000;

// Setting the path 
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views")
console.log(templatePath)

// middleware 
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))
app.set("view engine","ejs");
app.set("views", templatePath)


app.get("/",(req,res)=>{
    res.render("index")
})


app.post("/contact",async(req,res)=>{
try {
    const usermsg = new usercont(req.body);
    await usermsg.save();
    res.status(201).render("index")
} catch (error) {
    res.status(500).send(error)
}
})
app.get("/services",(req,res)=>{
    res.send("Welcome to services Page Laude !")
})
app.get("/photos",(req,res)=>{
    res.send("Welcome to Photos Page Laude !")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to About Page Laude !")
})

app.listen(port,()=>{
    console.log(`Port is running at ${port}`)
})