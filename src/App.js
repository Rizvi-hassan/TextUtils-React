// import logo from './logo.svg';
import "./App.css";
import Navbar from './Components/Navbar.mjs'
// import About from './Components/About.js'
import TextForm from './Components/TextForm.js'
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    console.log(mode)
    if (mode === 'light'){
      setMode('dark');
      document.body.style.background = '#05001c';
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
    }
  }
  return (
    <>
      <Navbar title = "TextUtils" about = 'About' mode = {mode} togglemode = {toggleDarkMode} />
      <div className="container">
        <TextForm heading = "Enter your text to analyze" mode = {mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
