



const Contact = require("../models/contactSchema");

const deleteContact = async (req, res) => {
    console.log(req.params.id)
    const contact = await Contact.findByIdAndDelete(req.params.id)
    res.send(contact)

}

module.exports = deleteContact;