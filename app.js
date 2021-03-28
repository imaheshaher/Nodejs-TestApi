const express = require('express')
const app = express()

const {env} = require('./config/config')

const port = env.port
const router = require('./routes/route')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/',router);
mongoose.connect(env.mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log("database connected ..")
    }
})










app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))