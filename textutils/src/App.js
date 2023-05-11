import PropTypes from "prop-types";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import AboutUs from "./components/AboutUs";

function App() {
  // make a state to see wheather mode will be dark or light 
  const[mode,setMode] = useState('light');
  const toggleMode =()=>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#052c65';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
      <Navbar title="TextFun" about="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}

      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze" mode={mode}/>
      </div>

      {/* <AboutUs/> */}
    </>
  );
}

// Using default props
Navbar.defaultProps = {
  title: "Enter your title here",
  about: "About Us",
};

// Types of props
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

export default App;
