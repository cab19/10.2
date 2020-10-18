import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModelBody from './ModelBody';


function WorkerTaskModal(props)
{
    //console.log(JSON.stringify(props))
    if(typeof props.data === 'undefined') return <div></div> // return empty div if data not set

    return (
        <div>        
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>{props.data[0].type[0].toUpperCase() + props.data[0].type.substring(1)} Task:</h4> 
                        <h5>{props.data[0].title}</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModelBody data={props.data[0]}/>                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
      </div>
    )
}

export default WorkerTaskModal