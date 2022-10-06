import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function AlertBox(props) {
  return (
    <div style={{height:"50px"}}>
   { props.alert &&  <div>
        <Alert key={"success"} variant={"success"} style={{position:"relative"}}>
          {props.alert.msg}
        </Alert>
    </div>} 
    </div>   
  )
}
