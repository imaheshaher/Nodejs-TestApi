const mongoose = require("mongoose");
const venue = require("../models/BookDatamodels");



exports.getvenue = async (req, res) => {

    const data = await venue.find({})
    res.json({
        "status":true,
        "message":"blog listed succesfully",
        "data":data
    })
     
}