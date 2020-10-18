import React from 'react';
import Label from './Label';
import TextInput from './TextInput';
import ImageUpload from './ImageUpload';

function ImageTask(props){
    return(
        <div>
            <Label text={props.title} />
            <TextInput labelText="Question" controlId="question" onChange={props.onChange} required />
            <ImageUpload onChange={props.imageHandler} />
        </div>
    );
}

export default ImageTask;