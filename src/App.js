import React, { useState } from 'react';
import NavBar from './components/Navbar';
import TextArea from './components/TextArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import AlertBox from './components/AlertBox';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

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
    }, 3000);
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
    document.body.style.backgroundColor = "#042743"
    showAlert("Dark Mode is enabled...", "Success")
    setLight("light")
    setMode("dark")
    }
  }
  return (
   <>
   <BrowserRouter>
   <NavBar title="Fun & Word" mode={mode} toggleMode={toggleMode} light={light}/>
   <AlertBox alert={alert}/>

        <Routes>

          <Route path="/" element={<TextArea mode={mode}/>}/>

          <Route path="/about" element={<About mode={mode}/>}/>
        
        </Routes>

   </BrowserRouter>
   </>
  )
}

export default App;
