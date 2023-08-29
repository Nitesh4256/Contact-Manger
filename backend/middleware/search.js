const Contact = require("../models/contactSchema");



const search = async (req, res, next) => {


    try {
        const contactData = await Contact.find({ name: req.params.name })
        if (!contactData) {
            console.log("not found")
        }
        res.json({
            success: true,
            data: contactData
        })
        next()
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }

}
module.exports = search;