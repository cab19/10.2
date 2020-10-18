import React from 'react'

function ModalSentence(props)
{
    return(
      <div>
        <div><b>Description: </b>{props.data.description}</div>
        <div><b>Sentence: </b>{props.data.question}</div>
        <div><b>Expiry: </b>{props.data.expiry}</div>
        <div><b>Reward: </b>${props.data.reward}</div>
      </div>
    )
}

export default ModalSentence