import React,{useState} from 'react';
import axios from 'axios';
import WorkerTaskList from './WorkerTaskList';
import WorkerSearch from './WorkerSearch'


const ContextContainer = React.createContext(null); // creating context global varuiable to hold state




function Worker(){
    const [refreshed, updateRefreshed] = useState(true);
    const [workerTask, setWorkerTask] = useState({});
    const [searchTerm, setSearchTerm] = useState({criteria: "title", term: ""});

    function searchTasks(e){
        //setSearchTerm(e.target.value);
        setSearchTerm({ ...searchTerm, term : e.target.value }); // keep appstate and update
    }

    function setCriteria(e){
        //console.log('crit: '+e.target.value);
        //setSearchCriteria(e.target.value);
        setSearchTerm({ ...searchTerm, criteria : e.target.value }); // keep appstate and update
    }

    const handleDelete = (e) => {
        e.stopPropagation(); // stop event bubbling, ie trigger of modal      
        let tmpId = e.target.id;
        let filteredList = workerTask.data.filter(function (task) {
            return task._id != tmpId;
        });

        setWorkerTask({ ...workerTask, data : filteredList }); // update data
    };
    
    if(refreshed){ // on refresh get list from db
        getTasks();
        updateRefreshed(false);
    }

    function getTasks(){ // helper function to get data from db and add it to state.
        axios.get('http://localhost:5000/task')
        .then((res)=>{
            if(typeof workerTask.data === 'undefined'){
                setWorkerTask({data : res.data }); // assign data
            }           
        })
        .catch(()=>{
            console.log("Error getting data.");
        });
        
    }

    return(
        <div>
            <ContextContainer.Provider value={{ searchTerm, setSearchTerm }}> {/* used to provide access to state across siblings */}
                <div style={{width: "100%"}}>
                    <WorkerSearch ContextContainer = {ContextContainer} onChange={searchTasks} setCriteria={setCriteria}/>                 
                </div>
                <WorkerTaskList data={workerTask.data} ContextContainer = {ContextContainer} handleDelete={handleDelete} />
            </ContextContainer.Provider>       
        </div>
        
    )
}

export default Worker;