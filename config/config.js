
require('dotenv').config()
module.exports.env ={
    port:process.env.PORT,
    mongoURL:process.env.MONGODB_URL
}