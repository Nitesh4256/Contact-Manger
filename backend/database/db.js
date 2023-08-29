const mongoose = require("mongoose");
require("dotenv").config();

const UserContact = mongoose.connect(process.env.SERVER_URL)
    .then((value) => {
        console.log("connection succefull");

    })
    .catch((error) => {
        console.log(error)

    })

