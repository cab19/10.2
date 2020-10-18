import React from 'react';
import Label from './Label';
import TextInput from './TextInput';

const ChoiceTask = (props) => (
    <div>
        <Label text="Setting up your Task - Choice Task" />
        <TextInput labelText="Question" controlId="question" onChange={props.onChange} required />
        <TextInput labelText="Choice A" controlId="choiceA" onChange={props.onChange} required />
        <TextInput labelText="Choice B" controlId="choiceB" onChange={props.onChange} required />
        <TextInput labelText="Choice C" controlId="choiceC" onChange={props.onChange} required />
    </div>
)

export default ChoiceTask;