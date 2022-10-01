import NavBar from './components/Navbar';
import TextArea from './components/TextArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import React, { useState } from 'react';
import AlertBox from './components/AlertBox';


function App() {
  const [mode,setMode] = useState('light');
  const [light,setLight] = useState('dark');
  const [alert,setAlert] = useState(null);

  const showAlert = (msg,type)=>{
      setAlert({
       msg: msg,
       type: type
      })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if (mode === "dark") {
      document.body.style.backgroundColor = "white"
      setMode("light")
      setLight("dark")
      showAlert("Light Mode is enabled...", "Success")
    }
    else
    {
    document.body.style.backgroundColor = "#343a40"
    showAlert("Dark Mode is enabled...", "Success")
    setLight("light")
    setMode("dark")
    }
  }
  return (
   <>
   <NavBar title="Fun & Word" mode={mode} toggleMode={toggleMode} light={light}/>
   <AlertBox alert={alert}/>
   <TextArea mode={mode}/>
   <About mode={mode}/>
   </>
  )
}

export default App;
