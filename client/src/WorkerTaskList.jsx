import React,{useState, useContext} from 'react'
import WorkerTask from './WorkerTask'
import WorkerTaskModal from './WorkerTaskModal'
import { format } from 'date-fns';



function WorkerTaskList (props){
    const { searchTerm } = useContext(props.ContextContainer);
    // modal handling
    const [show, setShow] = useState(false);
    //const [index, setIndex] = useState(0);
    const [modalData, setModalData] = useState();

    const handleClose = () => setShow(false);
    function handleShow(id){
        // need to use id not index, so need to pass in id then return
        let tmpData = props.data.filter(function (task) {
            return task._id == id;
        });
        setModalData(tmpData);

        //console.log('id called: '+JSON.stringify(tmpData));
        //setIndex(index);
        setShow(true);
    };
    // end modal handling

    if(typeof props.data === 'undefined'||props.data.length == 0) return <div></div>;
    let tmpData = props.data;

    const filteredTasks = tmpData.filter((task)=>{

        //console.log('searchTerm: '+searchTerm.term+" : "+task.expiry)
        
        if(searchTerm.criteria=='title'){
            return task.title.toLowerCase().includes(searchTerm.term.toLowerCase()); // filter based on title
        }
        else{
            console.log('use expiry');
            let searchDate = new Date(searchTerm.term);
            if(!searchTerm.term)
                searchDate = new Date();
            
            let expiryDate = new Date(task.expiry);

            return expiryDate.getTime() >= searchDate.getTime() 
        }        
    })
        
  
    return <div className='row workerTask'>
        {filteredTasks.map((task, index) => 
            <WorkerTask 
                key = {task._id}
                id = {task._id}
                type = {task.type}
                title = {task.title}
                description = {task.description}
                expiry = {format(new Date(task.expiry), 'dd/MM/yyyy')}
                handleShow = {handleShow}
                handleDelete = {props.handleDelete}
                index = {index}
            />
        )}
        <WorkerTaskModal handleShow = {handleShow}  handleClose = {handleClose} show={show} data={modalData} />  
    </div>
}

export default WorkerTaskList