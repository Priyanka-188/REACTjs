import React, {useState} from "react";

export default function TextForm(props) {
    //arrow function to change text to uppercase
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked!" +text)
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    // arrow fucntion to change text to lowercase
    const handleLowClick=()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    // arrow function to handle additon of text in the textare
    const handleOnChange= (event)=>{
        // console.log("handle on change");
        setText(event.target.value);
    }

    // Creating a state to change to text to uppercase lowercase or some other operation.
    const [text, setText] = useState("Enter Your text here");
    // setText("new text");  //correct way to set the text
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label ">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control "
          id="mybox"
          rows="8" 
          value={text} onChange={handleOnChange}     //setting the value of text default initially but change in text (addition of text ) will be handle by onChnage (handleOnClick ) function.
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
      </div>
    </div>
  );
}
