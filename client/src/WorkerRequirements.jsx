import React from 'react';
import Label from './Label';
import TextInput from './TextInput';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const WorkerRequirements = (props) => (
    <div>
        <Label text="Worker Requirements" />
        <Row className="mt-2">
            <Col xs="auto">
            <Form.Label>
                Require Master Workers
            </Form.Label>
            </Col>
            <Col xs="auto">
                <div key='radio' onChange={props.onChange}>
                    <Form.Check name="masterWorker" inline label="Yes" type='radio' id='radio' value='true' required />
                    <Form.Check name="masterWorker" inline label="No" type='radio' id='radio' value='false' />
                </div>
            </Col>
        </Row>
        <TextInput labelText="Reward per response" controlId="reward" type="number" onChange={props.onChange} />
        <TextInput labelText="Number of workers" controlId="workers" type="number" onChange={props.onChange} />
    </div>
)

export default WorkerRequirements;