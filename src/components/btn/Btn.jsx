import React from 'react'
import "./Btn.scss"

const Btn = (props) => {
  return (
    <button className={props.sctyle}>{props.text}</button>
  )
}

export default Btn