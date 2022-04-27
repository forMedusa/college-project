const connection = require('../index.js');
const express= require('express');
const router= express.Router();
const user= require('./userSchema');
console.log("chala")
    const userQueries={
        insertUser:(req,res) =>{
            let userObj={
                uname: req.body.username,
                name:req.body.name,
                email:req.body.email,
                pass:req.body.pass,
                institute:req.body.institute,
                loggedIn:req.body.loggedIn
            }
            console.log("Result",res);
            console.log("Request",req);
        user.create(userObj);
        return res.json({
            data:[],
            success:true,
            message:'User Registered'
        })
        }
    }
router.post('/user',(req,res)=>{
    userQueries.insertUser(req,res);
})
module.exports=userQueries;
module.exports=router;