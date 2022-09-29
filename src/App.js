import NavBar from './components/Navbar';
// import TextArea from './components/TextArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode,setMode] = useState('dark');
  const [light,setLight] = useState('light')

  const toggleMode = ()=>{
    if (mode === "dark") {
      setMode("light")
      setLight("dark")
    }
    else
    setMode("dark")
    setLight("light")
  }
  return (
   <>
   <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} light={light}/>
   {/* <TextArea/> */}
   <About/>
   </>
  )
}

export default App;
