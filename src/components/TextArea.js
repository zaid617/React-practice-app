import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export default function TextArea(props) {


    // this function is used to convert all letters in upper case

    function upperCaseHandle() {
            let newText = text.toUpperCase()
            setText(newText);
        
    }

    // this function is used to convert all letters in upper case

    function lowerCaseHandle() {
        let newText = text.toLowerCase()
        setText(newText);
    
}

    // this is use to write inside a textbox when any change in occur

    function changeHandle(event) {
        setText(event.target.value)
    }

    // this function is used to convert all letters in upper case

    function clearText() {
        let newText = "";
        setText(newText);
    
}

// this function will remove extra spaces in your text

    function removeSpace() {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    
}

    // set variable for text

    const [text, setText]= useState("");

    return ( 
        <>
    <div className='container' style={{color:props.mode==="dark"?'white':'black'}}>
        <h1 className='my-3'>Enter the text to analyze....</h1>
       <InputGroup>
        <Form.Control 
        onChange={changeHandle} 
        rows={6}
        value={text} 
        as="textarea" 
        aria-label="With textarea" 
        style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}
        />
      </InputGroup>
      <Button variant=" btn btn-primary my-3 " onClick={upperCaseHandle} >Convert To Uper Case</Button>
      <Button variant=" btn btn-primary m-3" onClick={lowerCaseHandle} >Convert To Lower Case</Button>
      <Button variant=" btn btn-danger my-3" onClick={clearText} >Clear Text</Button>
      <Button variant=" btn btn-danger m-3" onClick={removeSpace} >Remove Extra Spaces</Button>
    <hr />
    </div>



    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2><u>Words Summary</u></h2>
        <p>No. Of Words : {text.split(" ").length}</p>
        <p>No. Of Characters : {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes To Read.</p>
    </div>

    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h3><u>Preview</u></h3>
        <p>{text}</p>
    </div>

   </>
  )
}
