import React from 'react';
import Label from './Label';
import TextInput from './TextInput';

const GenericTask = (props) => (
    <div>
        <Label text={props.title} />
        <TextInput labelText="Question" controlId="question" onChange={props.onChange} required />
    </div>
)

export default GenericTask;