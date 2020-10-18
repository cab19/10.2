import React from 'react'
import './WorkerTask.css'

function WorkerTask(props)
{
    //console.log(JSON.stringify(props));
    return(
      <div className="column" onClick={() => props.handleShow(props.id)}>
        <div className="card">
          <div>
            <span className="close" id={props.id} onClick={props.handleDelete}>X</span>
          </div>
          <h6>{props.type[0].toUpperCase() + props.type.substring(1)} Task</h6>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>{props.expiry}</p>
        </div>
      </div>
    )
}

export default WorkerTask