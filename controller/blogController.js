const mongoose = require("mongoose");
const blog = require("../models/BlogModel");



// module.exports.create = (req,res) => {
//     const body=req.body
//     console.log(body)
//     const jdata = JSON.parse(JSON.stringify(req.body))
//     console.log(jdata)
//     res.send(jdata)
// }  

module.exports.create = async (req, res) => {
    const data = req.body;
    console.log(data)
    let blogdata = new blog(data)
    await blogdata.save((response) => {
        res.send(response)
    })

}


exports.getblog = async (req, res) => {

    const data = await blog.find({})
    res.json({
        "status":true,
        "message":"blog listed succesfully",
        "data":data
    })
     
}

exports.detail = async(req,res) => {
    let id = req.body.id
    const data = await blog.findOne({_id:id})
    res.json({
        "status":true,
        "message":"blog details succesfully",
        "data":data
    })
}

exports.delete = async(req,res) => {
    let id = req.body.id;
    const data = await blog.findOneAndDelete({_id:id})
    res.json({
        "status":true,
        "message":"blog delted succesfully",
        "data":data
    })
}

