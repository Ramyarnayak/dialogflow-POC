const express = require('express');
const port = process.env.PORT || 3030;
const bodyParser = require("body-parser");
const cors = require('cors');

const {json} = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/learning/server', (req,res)=>{
    res.send("Hi, from server ")
})

require('./routes/learning-route')(app)
app.listen(port, ()=>{
    console.log("server is running")
})