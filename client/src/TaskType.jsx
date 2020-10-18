import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function TaskType(props){
    useContext(props.ContextContainer);
    
    return(
        <Row className="mt-2">
            <Col xs="auto">
            <Form.Label>
                Select Task Type:
            </Form.Label>
            </Col>
            <Col xs="auto">
                <div key='radio' onChange={props.onChange}>
                    <Form.Check name="taskType" inline label="Choice Task" type='radio' id='radio' value='choice' required />
                    <Form.Check name="taskType" inline label="Decision-Making Task" type='radio' id='radio' value='decision' />
                    <Form.Check name="taskType" inline label="Sentence-Level Task" type='radio' id='radio' value='sentence' />
                    <Form.Check name="taskType" inline label="Image Task" type='radio' id='radio' value='image' />
                </div>
            </Col>
        </Row>
    );
}

export default TaskType;