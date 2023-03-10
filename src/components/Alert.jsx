import React from 'react'

export default function Alert(props) {


  return (
    <div className={`${props.className}`}>
      <h1>{props.title}</h1>
      <h2 onClick={props.event}>{props.clickicon}</h2>
    </div>
  )
}
