import React from 'react'

function Btn(props) {
  return (
    <div>
        <input type="button" value={props.afn} id={props.id}/>
        <p>{props.details}</p>

      
    </div>
  )
}

export default Btn
