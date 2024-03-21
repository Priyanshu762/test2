const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const RegisterModel=require("./models/register")

const app=express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Test')
// mongoose.connect('mongodb+srv://kumarpriyanshu762:trade@test0.rewtgrt.mongodb.net/?retryWrites=true&w=majority&appName=Test0')
.then(()=>{
    console.log("Mongodb connected")
}).catch((err)=>{
    console.log(err)
})


app.post('/register',(req,res)=>{
    const {name,email,password}=req.body;
    RegisterModel.findOne({email:email})
    .then(user =>{
        if(user){
            console.log("User already exists")
            res.json("User already exists")
        }
        else{
            RegisterModel.create({
                name:name,
                email:email,
                password:password
            })  
            .then(result => res.json("Account created Succesfully"))
            .catch(err => res.json(err))
            }
    }).catch(err => res.json(err))
})

// app.post('/login',(req,res)=>{
//     const {email,password}=req.body;
//     RegisterModel.findOne({email:email})
//     .then(user =>{
//         if(user){
//             if(user.password===password){
//                 res.json("Login Succesful")
//             }
//             else{
//                 res.json("Wrong Password")
//             }
//         }
//         else{
//             res.json("User does not exist")
//         }
//     }).catch(err => res.json(err))
// })



app.post('/login', (req, res)=>{
    // To find record from the database
//    const {email , password}=req.body;
//    RegisterModel.findOne({email:email})
//    .then(user){
//     if(user.password===password){
//         res.json("Login Succesful")
//     }
//     else{
//         res.json("Wrong Password")
//     }
//    }else{
//     res.json("User does not exist")                                                   
//    }
const {email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
    
})


app.listen(3001,()=>{
    console.log("Server is running at port 3001");
})