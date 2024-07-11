const mongoose =require('mongoose')

const adminDBSchema=new mongoose.Schema({
    aname:String,
    bpass:String
})
const adminDBModel = mongoose.model("vprintadmin",adminDBSchema)
module.exports =adminDBModel