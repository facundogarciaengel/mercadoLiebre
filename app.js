const express = require("express")
const app = express()
const path = require("path")
const localPath = (path.join(__dirname, "public"))
app.use(express.static(localPath))
app.listen(3000, ()=>{
    console.log("Escuchando en el puerto 3000")
})

let rutaHome = path.join(__dirname, "/views/home.html")
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})