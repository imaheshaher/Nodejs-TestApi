const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    name:{
        type:String
    },
    sport:[
        {
        sport_name:{
            type:String
        },
        sport_logo:{
            type:String
        }
    }
    ]
})

const testModel = mongoose.model("testModel",testSchema)
module.exports = testModel


