const mongoose=require('mongoose');

const Cschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    degreeName:{
        type:String,
        reuired:true,
    },
    
    
},{timestamps:true});

module.exports=mongoose.model('Schema',Cschema);