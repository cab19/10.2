import React,{useState, useContext} from "react";
import TextInput from './TextInput';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function WorkerSearch(props){
    const { searchTerm } = useContext(props.ContextContainer);

    if(searchTerm.criteria!='title'){
        return(
            <div>
            <Row className="mt-2">
                <Col xs="auto">
                <Form.Label>
                    Search:
                </Form.Label>
                </Col>
                <Col xs="auto">
                    <div key='radio' onChange={props.setCriteria}>
                        <Form.Check name="taskType" inline label="Title" type='radio' id='radio' value='title' defaultChecked required />
                        <Form.Check name="taskType" inline label="Task Expiry" type='radio' id='radio' value='expiry' />
                    </div>
                </Col>
            </Row>
            <TextInput labelText="Search Tasks" placeHolder="Enter search criteria" type="date" controlId="searchText" onChange={props.onChange} defValue="" />
            </div>
        );
    }
    else{
        return(
            <div>
            <Row className="mt-2">
                <Col xs="auto">
                <Form.Label>
                    Search:
                </Form.Label>
                </Col>
                <Col xs="auto">
                    <div key='radio' onChange={props.setCriteria}>
                        <Form.Check name="taskType" inline label="Title" type='radio' id='radio' value='title' defaultChecked required />
                        <Form.Check name="taskType" inline label="Task Expiry" type='radio' id='radio' value='expiry' />
                    </div>
                </Col>
            </Row>
            <TextInput labelText="Search Tasks" placeHolder="Enter search criteria" controlId="searchDate" onChange={props.onChange}  />
            </div>
        );
    }    
}

export default WorkerSearch;