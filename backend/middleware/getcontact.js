

const Contact = require("../models/contactSchema");
const getcontact = async (req, res, next) => {


    try {
        const userData = await Contact.find({});
        res.json({ success: true, data: userData });
        next()
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }

}
module.exports = getcontact;