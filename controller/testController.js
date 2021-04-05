const testModel = require("../models/TestModel")

module.exports.create = async (req,res) => {
    const data = req.body
    
    const testData =  new testModel(data)
    await testData.save()
    res.json(testData)
}

module.exports.get = async (req,res) => {
    const d= await testModel.find({"sport.sport_name":["kho-kho","cricket"]},{"sport.$":2})
    res.json(d)
}