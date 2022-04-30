const express= require('express');
const cors= require('cors');
const bodyparser= require('body-parser');
//const mysql= require('mysql2');
var objectId=require('mongodb').ObjectID;
const mongoose=require('mongoose');
const e = require('express');
const { MongoClient }=require('mongodb');
const { query } = require('express');
var coroptions={
    origin: "http://localhost:4200"
};
const app=express();

app.use(express.json());
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})
app.use(cors());
app.use(bodyparser.json());

const port = process.env.PORT || 8080;
// Database Connection
const url=`mongodb://localhost:27017/college-project`;
//mongoose.connect(`mongodb://localhost:27017/college-project`);
const client= new MongoClient(url);
client.connect();
mongoose.connect(url);
mongoose.connection.once('open', () => console.log("Successfully connected to Database!"))
.on('error', (error) => {
    console.log('Mongoose Connection Warning!', error);
});
// .then(() => {
//   console.log('Connected to database');
//   app.listen(port, () => {
//     console.log(`Express server listening on port ${port}`);
//   });
// });
// const user=require('./User/userQueries');
// app.use('api/user',user);

app.listen(4000,()=>{
    console.log('server running');
})

// USER SCHEMA
const userSchema =  mongoose.Schema({
    username:  String, // String is shorthand for {type: String}
    name: String,
    email:   String,
    pass:String,
    institute:String,
    loggedin:Boolean
  });
  const user = mongoose.model('User', userSchema);

  //POST API USER
app.post('/user', async (req, res) => { //
    const data = new user({ //
        username: req.body.username,//
        name: req.body.name,//
        email: req.body.email,//
        pass: req.body.pass,//
        institute: req.body.institute,//
        loggedin: req.body.loggedin//
    })
    const val=await data.save();//
    res.json(val)//
})//

// GET API USER
app.get('/users', (req,res)=>{
    const data=client.db('college-project').collection('users').find({}).toArray(function(err, totalpract) {  
        if (err){ 
            console.log(err);
            res.send({
                message: err
            })  
        }
        
        else if(totalpract.length<0){
                res.send({
                    message: "No Data Founf!"
                });
        }
        else{
        for(let i = 0; i < totalpract.length; i++) {  
              pract = totalpract[i];  
             console.log(totalpract[i])
           console.log(pract.username + ", " + pract.name + ", " + pract.email);  
         }  
         res.send({
             data: totalpract,
             message: "Data Fetched!"
         })
        }
        })
    })

//GET API FOR ONE USER
app.get('/users/:name',async(req,res)=>{
    console.log(req.body);
    console.log(req.params.name);
    await client.db('college-project').collection('users').findOne({'name':req.params.name}, function(err,obj) 
    {
        if(err){
            res.send({
                message: err
            })
        }
        else{
        res.send({
            data: obj,
            message: "User Details Fetched!"
        })  
      }
      });
})

//UPDATE API FOR USER
app.put('/users/:username', (req,res)=>{
    var data ={ 
        loggedin: req.body.loggedin
    }
    var q={$set:{loggedin:req.body.loggedin}}
    console.log(req.body.loggedin)
    console.log(req.params.username)
    client.db('college-project').collection('users').findOneAndUpdate({"username":req.params.username},q, function(err,obj){
            if(err){
            res.send({
                message: err
            })
        }
        else{
        res.send({
            data: obj,
            message: "User Details Updated!"
        })  
        }
    })
    //console.log(res);
})
// app.get('/user',function(req,res){
//     res.send({type: 'GET'});
// });

// Database Connection

// const db= mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password:'',
//     database:'college-project',
//     port: 3306
// });
//Check Database Connection
 

// db.connect(err=>{
//     if(err){
//         console.log('Error!');
//     }
//     else{
//         console.log('Database Connected!');
//     }
// })

// POST API
// app.post('/user',(req,res)=>{
//     console.log(req.body,'create data');
//     let uname= req.body.username;
//     let name= req.body.name;
//     let email=req.body.email;
//     let password=req.body.pass;
//     let institute= req.body.institute;
//     // let qr= 'INSERT INTO user(name,email,password,Institute)\n' +
//     // "     VALUES(${name},${email},${password},${institute})"
//     let qr= `INSERT INTO user(username,
//         name,email,password,institute) VALUES('${uname}','${name}','${email}','${password}','${institute}')`;

//     db.query(qr,(err,result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send({
//                 message: "Data Inserted!"
//             });
//         }
       
//     });
// })