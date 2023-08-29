const express = require("express");
const app = express();
require("dotenv").config();
require("./database/db");
require("./models/contactSchema")
const path = require("path");
const getcontact = require("./routes/user")
const port = process.env.PORT || 8000;
app.use(require("./routes/user"))

app.use(express.json())
console.log(path.join(__dirname));
app.use(express.static(path.join(__dirname, "../frontend/build")))
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
})




app.listen(port, () => {
    console.log("server is listning on port " + port)
})