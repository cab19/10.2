import React from "react";
import ModalChoice from './ModalChoice';
import ModalDecision from './ModalDecision';
import ModalSentence from './ModalSentence';
import ModalImage from './ModalImage';



function ModalBody(props){

    switch(props.data.type) {
        case 'choice':
            // choice 
            return(
                <div>
                    <ModalChoice data={props.data}/>
                </div>
            );
        case 'decision':
            // decision 
            return(
                <div>
                    <ModalDecision data={props.data}/> 
                </div>
            );
        case 'sentence':
            // sentence 
            return(
                <div>
                    <ModalSentence data={props.data}/> 
                </div>
            );
        case 'image':
            // image 
            return(
                <div>
                    <ModalImage data={props.data}/>
                </div>
            );
        default:
            // return default
            return(
                <div></div>
            );
    }
}

export default ModalBody;