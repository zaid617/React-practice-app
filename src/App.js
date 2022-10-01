import NavBar from './components/Navbar';
import TextArea from './components/TextArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode,setMode] = useState('light');
  const [light,setLight] = useState('dark')

  const toggleMode = ()=>{
    if (mode === "dark") {
      document.body.style.backgroundColor = "white"
      setMode("light")
      setLight("dark")
    }
    else
    {
      document.body.style.backgroundColor = "#343a40"
    setLight("light")
    setMode("dark")
    }
  }
  return (
   <>
   <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} light={light}/>
   <TextArea mode={mode}/>
   <About/>
   </>
  )
}

export default App;
