const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    moviename: {
        required: true,
        type: String
    },
    directedby:{
        required:true,
        type:String
    },
    releaseyear:{
        required:true,
        type:Number
    },
    budget: {
        required: true,
        type: String
    },
    boxofficecollection:{
        required:true,
        type:String
    },
    filename:  {
        type: String, 
        required: true 
    },
    path:{
        type: String, 
        required: true 
    },
    url:{
        type:String,
        required:false 
    },
    size:{
        type: Number, 
        required: true 
    },
    uuid:{
        type: String,
        required: true
    },

})

const MOVIECOLLECTION =  mongoose.model('MOVIECOLLECTION', dataSchema);
module.exports=MOVIECOLLECTION;