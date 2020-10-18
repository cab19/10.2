import React,{useState} from 'react'
import './App.css'
import TaskType from './TaskType';
import TaskDescription from './TaskDescription';
import TaskDetails from './TaskDetails';
import WorkerRequirements from './WorkerRequirements';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ContextContainer = React.createContext(null); // creating context global varuiable to hold state

const Task = (props)=>{
        const [task, setTask] = useState({});

        function updateTask(e){
            //console.log('UPDATE FUNCTION: '+e.target.name+" : "+e.target.value);
            setTask({ ...task, [e.target.name] : e.target.value }); // keep appstate and update
        }

        function imageHandler(e){
          //console.log('IMAGE FUNCTION: '+e.target.files.length);
          setTask({ ...task, selectedFile : e.target.files }); // keep appstate and update
        }

        function fetchCall(){ // function for posting to server
          fetch("http://localhost:5000/task",{
            method: "post",
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
              type: task.taskType,
              title: task.title,
              description: task.description,
              expiry: task.expiry,
              requireMaster: task.masterWorker,
              reward: task.reward,
              workers: task.workers,
              question: task.question,
              answer: task.answer,
              choiceA: task.choiceA,
              choiceB: task.choiceB,
              choiceC: task.choiceC,
            })
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(err =>{
            console.log("Error "+err)
          });
        }

        // adapted from https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
        function checkFiles(){ // checks files against accepted rules (number of files, filetype, etc)
          //console.log('CHECK FILES: '+task.selectedFile.length);
          if(task.selectedFile.length == 3){
            let err = false; // error var
            const types = ['image/png', 'image/jpeg', 'image/gif']; // accepted types
            for(var x = 0; x < task.selectedFile.length; x++) {
                if (types.every(type => task.selectedFile[x].type !== type)) { // checking file against accepted types
                  err = true;
                }
            };

            if (err) { // error
              console.log("Unsupported file types");
              return false; 
            }
            return true;
          }
          else{
            console.log("Invalid number of files")
            return false;
          }
        }

       
        const saveTask = ()=>{  // function to save data to the mongo, triggered by form submit
          //console.log('save called');
          const data = new FormData();
          let files = [];
          if(typeof task.selectedFile !== 'undefined'){ // process files if provided
            if(checkFiles()){ // check files comply              
              for(var x = 0; x < task.selectedFile.length; x++) {
                data.append('file', task.selectedFile[x]);
                files.push(task.selectedFile[x].name);
              }
              data.append('file', task.selectedFile);
              axios.post("http://localhost:5000/upload", data, ()=>{})
              .then(res => {
                console.log(res.statusText);
                fetchCall(); // save to mongo
              });
            }
          }
          else{ // if no images just post as normal
            fetchCall(); // save to mongo
          }
        }

        return (
            <div className= 'header-div'>
                <form onSubmit={saveTask}>
                <ContextContainer.Provider value={{ task, setTask }}> {/* used to provide access to state across siblings */}
                    <TaskType ContextContainer = {ContextContainer} onChange = {updateTask} />
                    <TaskDescription taskType={task.taskType} onChange = {updateTask} />
                    <TaskDetails 
                      ContextContainer = {ContextContainer} 
                      onChange = {updateTask} 
                      imageHandler = {imageHandler} 
                    />
                    <WorkerRequirements onChange = {updateTask} />
                    <Button id="save" type="submit" variant="primary" className="float-right" >Save</Button>
                </ContextContainer.Provider>
                </form>
            </div>
        )
}
export default Task