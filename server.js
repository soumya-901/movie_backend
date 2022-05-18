const express = require("express");
const routes = require("./routes/routes")
const mongoose = require('mongoose');
require('dotenv').config();

const port =process.env.PORT || 3000;
const DB =process.env.DB_LOCAL;
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', routes);
// app.use(express.json());

//connect with mongo db 

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("data base connect successfully")
})
.catch((err)=>{
    console.log(err);
})

//server started


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})