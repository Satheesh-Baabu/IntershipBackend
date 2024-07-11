const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const demoDBModel =require('./models/demoDB')
const adminDBModel= require('./models/adminDB')
// const dotenv=require('dotenv');
// const nodemailer =require('nodemailer')

// dotenv=config();
const app= express()
app.use(express.json())
app.use(cors())


//db connection

mongoose.connect("mongodb+srv://satheeshbaabum:admin@cluster0.lofsd1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log("Failed to connect",err))


//contact form submission

app.post('/contact',(req,res)=>{
   
    demoDBModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))

    // let transporter=nodemailer.createTransport({
    //     service: 'gmail'~,
    //     auth:{
    //         user:'vprinttech2019@gmail.com',
    //         pass: 'V@Print2019Tech'
    //     }
    // })
    // let mailOptions={
    //     from: 'vprinttech2019@gmail.com',
    //     to:'vprinttech2019@gmail.com',
    //     subject:'Feedback',
    //     text: req.body,
    // }
    // transporter.sendMail(mailOptions,(err,info)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log('success email sent')
    //     }
    // })
    
})

//for admin creation
// app.post('/admin',(req,res)=>{
   
//     adminDBModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => res.json(err))
// })

//for admin login checking

app.post('/admin',(req,res)=>{
    const{aname,bpass} =req.body;
    adminDBModel.findOne({aname:aname})
    .then(vprintadmin =>{
        if(vprintadmin){
            if(vprintadmin.bpass === bpass)
            {
                res.json("Success");
            }
            else{
                res.json("password incorrect")
            }
        }
        else{
            res.json("No record found")
        }
    })

})

//getting feedback data

app.get('/feedback',(req,res)=>{
    demoDBModel.find()
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})

app.listen("3001",()=>{
    console.log(`Server is running on port 3001`)
})