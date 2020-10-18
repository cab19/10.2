var express = require('express');
var cors = require('cors');
var app = express();

 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/iCrowdTask", {useNewUrlParser:true, useUnifiedTopology: true});
const Task = require("./models/Task");

// Adapted from https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './client/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
var upload = multer({ storage: storage }).array('file');

//
var tmpFiles = []; // array to hold updated file names

// ROUTES

app.post('/upload',function(req, res) { // THIS NEEDS TO BE MOVED INTO THE TASK ROUTE...
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        tmpFiles = req.files;

        return res.status(200).send(req.file)
    })

});

app.post('/task', (req,res)=>{ // 
    //console.log("post called "+JSON.stringify(req.body));

    const task = new Task(
        {
            type : req.body.type,
            title : req.body.title,
            description : req.body.description,
            expiry : req.body.expiry,
            requireMaster : req.body.requireMaster,
            reward : req.body.reward,
            workers : req.body.workers,
            question : req.body.question,
            answer : req.body.answer,
            translation : req.body.translation,
            choiceA : req.body.choiceA,
            choiceB : req.body.choiceB,
            choiceC : req.body.choiceC,
        }
    )

    if(tmpFiles.length > 0){ //if images add them to task details
        task.file1 = tmpFiles[0].filename;
        task.file2 = tmpFiles[1].filename;
        task.file3 = tmpFiles[2].filename;
        tmpFiles = [];
    }

    task.save((err) =>{ 
        if (err){
            console.log(err);            
        }
        else{
            console.log("Success!");
        }
    });

    res.json('success') // success

});

app.get('/task', (req, res)=>{ // return all tasks
    Task.find((err, taskList)=>{
        if (err)
            res.send(err);
        else 
            res.send(taskList);
    });
})

// ROUTES END

app.listen(5000, function (request, response){
    console.log("Server is running on 5000");
})