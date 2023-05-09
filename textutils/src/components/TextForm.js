import React, { useState } from "react";

export default function TextForm(props) {
  //arrow function to change text to uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!" +text)
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  // arrow fucntion to change text to lowercase
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  // function to clear whole text
  const handleclear = () => {
    setText(" ");
  };

  //function to capitalize the text
  const handleSentenceCase = () => {
    const newtext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext);
  };

  //function to capitalize first letter of every word
  const handleCapitalize = () => {
    const arr = text.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newtext = arr.join(" ");
    setText(newtext);
  };

  //function to capitalize first letter of every line.
  const handleFirstLetter = () => {
    const arr = text.split(".");
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newtext = arr.join(". ");
    setText(newtext);
  };

  //  function to copy the text to the clipboard
  const handleReverseString = () => {
    let arr = text.split(" ");
    arr = arr.reverse();
    const newtext = arr.join(" ");
    setText(newtext);
  }

  // arrow function to handle additon of text in the textare
  const handleOnChange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
  };

  // Creating a state to change to text to uppercase lowercase or some other operation.
  const [text, setText] = useState(" ");
  // setText("new text");  //correct way to set the text
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label ">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control "
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange} //setting the value of text default initially but change in text (addition of text ) will be handle by onChnage (handleOnClick ) function.
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          {" "}
          Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>
          {" "}
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSentenceCase}>
          Sentence Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalize}>
          Capitalize Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleFirstLetter}>
          Capitalize first letter
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseString}>
          Reverse text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclear}>
          Clear
        </button>

        
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
