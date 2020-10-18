import React from 'react'
import Image from 'react-bootstrap/Image';

function ModalImage(props)
{
    return(
      <div>
        <div><b>Description: </b>{props.data.description}</div>
        <div><b>Question: </b>{props.data.question}</div>
        <div style={{padding: "15px"}}><Image src={`${process.env.PUBLIC_URL}/images/`+props.data.file1} thumbnail /></div>
        <div style={{padding: "15px"}}><Image src={`${process.env.PUBLIC_URL}/images/`+props.data.file2} thumbnail /></div>
        <div style={{padding: "15px"}}><Image src={`${process.env.PUBLIC_URL}/images/`+props.data.file3} thumbnail /></div>
        <div><b>Expiry: </b>{props.data.expiry}</div>
        <div><b>Reward: </b>${props.data.reward}</div>
      </div>
    )
}

export default ModalImage