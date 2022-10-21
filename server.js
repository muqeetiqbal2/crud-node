require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

const port = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('insert.ejs');
})

app.get('/home',(req,res)=>{
    res.send("<h1>Welcom Home</h1>")
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})