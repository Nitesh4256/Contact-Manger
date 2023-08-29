

const Contact = require("../models/contactSchema")

const updatecontact = async (req, res, next) => {

    try {

        const _id = req.params.id;
        const dataupdata = await Contact.findByIdAndUpdate(_id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })



        res.send(dataupdata)


    } catch (error) {
        res.json({
            message: "error aa gya"
        })
    }
}

module.exports = updatecontact;  