import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './TextInput.css';


const TextInput = (props) => (
        <Form.Group as={Row} className= "textInput" controlId={props.controlId}>
            <Form.Label column sm="1">
                {props.labelText}
            </Form.Label>
            <Col sm="5">
                <Form.Control type={props.type} name={props.controlId} placeholder={props.placeHolder} onChange={props.onChange} required />
            </Col>
        </Form.Group>
)

export default TextInput;