const express = require("express")
const path = require("path")


const app = express();

app.use("/styles", express.static(path.join(__dirname, 'styles')))


app.get("/add-job", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "add-job.html"))
})

app.get("/profile", (req, res) => {
    res.send("<html><h1>This is your profile page!!</h1></html>")
})

app.get(["/", "/home"], (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"))
})

app.listen(3000)