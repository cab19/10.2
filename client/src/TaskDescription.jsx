import React from "react";
import Label from './Label';
import TextInput from './TextInput';

function TaskDescription(props){

    return(
    <div>
        <Label text="Describe your task to Workers" />
        <TextInput labelText="Title" placeHolder="Enter task title"  controlId="title" onChange={props.onChange} />
        <TextInput labelText="Description" placeHolder="Enter task description"  controlId="description" onChange={props.onChange} />
        <TextInput labelText="Expiry Date" controlId="expiry" onChange={props.onChange} type="date" />
    </div>
    );
}

export default TaskDescription;