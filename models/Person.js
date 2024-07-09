const mongoose=require('mongoose');

const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age: Number,
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:Number
})

const Person=mongoose.model('Person',personSchema);

module.exports=Person;