const express = require("express")
const app = express()
const path = require("path")
const localPath = (path.join(__dirname, "public"))
app.use(express.static(localPath))
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
  })

let rutaHome = path.join(__dirname, "/views/home.html")
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})