const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    type:{
        type: String, 
    },
    title:{
        type: String,        
    },
    description:{
        type: String,      
    },
    expiry:{
        type: Date,     
    },
    requireMaster:{
        type: Boolean,       
    },
    reward:{
        type: Number,      
    },
    workers:{
        type: Number,        
    },
    question:{
        type: String,        
    },
    answer:{
        type: Boolean,        
    },
    translation:{
        type: String,        
    },
    choiceA:{
        type: String,        
    },
    choiceB:{
        type: String,        
    },
    choiceC:{
        type: String,        
    },
    file1:{
        type: String,        
    },
    file2:{
        type: String,        
    },
    file3:{
        type: String,        
    },
});

module.exports  =  mongoose.model("Task", taskSchema)