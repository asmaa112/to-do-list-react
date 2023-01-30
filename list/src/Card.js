import React from 'react'
import './card.css'
export default function Card(props) {
  return (
    <div className='task'>
      <input type="checkbox" onChange={(e)=> {
        (e.target.checked)?e.target.nextSibling.classList.add('strike'):e.target.nextSibling.classList.remove('strike')    
      }}/>
      <p>{props.task}</p>
      <button onClick={(e) => {
        e.target.parentElement.remove()
      }}>delete</button>
    
    </div>
  )}
