import React from 'react'
import './styles.css'
function index({text,outlined}) {
  return (
    <div className={outlined?'outlined-btn':'btn'} >{text}</div>
  )
}

export default index