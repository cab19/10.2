import React from 'react'
import './Label.css'
import './ImageUpload.css';

function ImageUpload(props){
    return(
        <div className="form-group files text-center">
            <label>Upload Your 3 Images</label>
            <input type="file" className="form-control" multiple onChange={props.onChange} required></input>
        </div>
        
    )
}

export default ImageUpload