const express = require('express');
const morgan  = require('morgan');
const path = require('path');
const app = express();

app.get('/',(req,res)=>{
    return res.json({message:"hit home page url"})
})
app.get('*',(req,res)=>{
    return res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.listen(80,()=>{
    console.log("node app started at 80");
})
