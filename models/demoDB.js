const mongoose =require('mongoose')

const demoDBSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobileno:String,
    message:String
})
const demoDBModel = mongoose.model("vprintfeedback",demoDBSchema)
module.exports =demoDBModel