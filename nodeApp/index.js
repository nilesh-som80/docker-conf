const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
mongoose.connect("mongodb://root:pass@mongo:27017/").then(()=>{
    console.log("mongodb connected");
})
app.use(morgan('combined'))

app.get('/',(req,res)=>{
    return res.json({message:"hit home page url"})
})
app.get('*',(req,res)=>{
    return res.sendFile(path.join(__dirname,'/public/index.html'))
})
app.listen(80,()=>{
    console.log("node app started at 80");
})
