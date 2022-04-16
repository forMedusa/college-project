const express= require('express');
const cors= require('cors');
const bodyparser= require('body-parser');
const mysql= require('mysql2');

const app=express();

app.use(cors());
app.use(bodyparser.json());

// Database Connection

const db= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'college-project',
    port: 3306
});

//Check Database Connection

db.connect(err=>{
    if(err){
        console.log('Error!');
    }
    else{
        console.log('Database Connected!');
    }
})

app.listen(3000,()=>{
    console.log('server running');
})