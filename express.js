const express = require('express');
const  mongoose  = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/food',{useNewUrlParser:true});

app.use(express.json());
const db = mongoose.connection;
db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log('connected to database'));

app.get('/',(req,res)=>res.redirect('/home'));

const fod = require('./routes/food.js')
app.use('/home', fod)


app.listen(3000);