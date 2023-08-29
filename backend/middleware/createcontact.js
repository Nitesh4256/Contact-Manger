

const Contact = require("../models/contactSchema")
const createcontact = async (req, res, next) => {
    console.log(req.body)


    try {

        const { name, email, phone } = req.body;


        if (!name || !email || !phone) {
            res.status(400).json({
                message: "fill all fields"
            })
        }

        const contact = await Contact.create({
            name,
            email, phone
        })
        contact.save();
        next()

    }
    catch (error) {
        console.log(error);
    }
}
module.exports = createcontact;