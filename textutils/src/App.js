import React from "react";
// import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  // make a state to see wheather mode will be dark or light
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#052c65";
      showAlert("Dark mode has been enabled", "success ");
      // document.title = "TextFun - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success ");
      // document.title = "TextFun - Light Mode";
    }
  };
  return (
    <>
      
      {/* <Navbar/> */}


      <Router>
      <Navbar
        title="TextFun"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/about"  element={<About mode={mode}/>} />

          <Route
            exact
            path="/"
            element={
              <TextForm heading="Try TextFun - Word Counter , Character Counter ,  Remove extra spaces " mode={mode} showAlert ={showAlert}/>
             }
          /> 
        </Routes>
      </Router> 
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
