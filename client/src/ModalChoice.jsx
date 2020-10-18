import React from 'react'

function ModalChoice(props)
{
    console.log(JSON.stringify(props));
    return(
      <div>
        <div><b>Description: </b>{props.data.description}</div>
        <div><b>Question: </b>{props.data.question}</div>
        <div><b>Option A: </b>{props.data.choiceA}</div>
        <div><b>Option B: </b>{props.data.choiceB}</div>
        <div><b>Option C: </b>{props.data.choiceC}</div>
        <div><b>Expiry: </b>{props.data.expiry}</div>
        <div><b>Reward: </b>${props.data.reward}</div>
      </div>
    )
}

export default ModalChoice