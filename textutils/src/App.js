import PropTypes from "prop-types";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import AboutUs from "./components/AboutUs";

function App() {
  // make a state to see wheather mode will be dark or light 
  const[mode,setMode] = useState('light');
  const[alert,setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode =()=>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#052c65';
      showAlert("Dark mode has been enabled","success ");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success ");
    }
  }
  return (
    <>
      <Navbar title="TextFun" about="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}

      <Alert alert = {alert}/>

      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze" mode={mode} showAlert ={showAlert}/>
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
