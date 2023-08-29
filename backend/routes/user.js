const express = require("express");
const router = express.Router();
const path = require('path');
// router.use(express.json())
const createcontact = require("../middleware/createcontact")
const getcontact = require("../middleware/getcontact")
const updatecontact = require("../middleware/updatecontact")
const deleteContact = require("../middleware/deletecontact")
require("dotenv").config();
const search = require("../middleware/search")
router.use(express.json())
router.post("/createcontact", createcontact

)
router.patch("/update/:id", updatecontact)
router.delete("/delete/:id", deleteContact)

router.get("/getcontact", getcontact)
router.get("/search/:name", search)


module.exports = router;