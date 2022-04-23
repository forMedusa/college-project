const express= require('express');
const cors= require('cors');
const bodyparser= require('body-parser');
//const mysql= require('mysql2');
const mongoose=require('mongoose');
const e = require('express');
var coroptions={
    origin: "http://localhost:4200"
};
const app=express();

app.use(cors());
app.use(bodyparser.json());

const port = process.env.PORT || 8080;

// Database Connection
mongoose.connect(`mongodb://localhost:27017/college-project`)
.then(() => {
  console.log('Connected to database');
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
});

// app.listen(3000,()=>{
//     console.log('server running');
// })


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

