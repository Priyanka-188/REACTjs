import React, { useState } from "react";

export default function TextForm(props) {
  //arrow function to change text to uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!" +text)
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upperCase! ", "success");
  };

  // arrow fucntion to change text to lowercase
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowerCase! ", "success");
  };
  // function to clear whole text
  const handleclear = () => {
    setText(" ");
    props.showAlert("Text cleared ! ", "success");
  };

  //function to capitalize first letter of every word
  const handleCapitalize = () => {
    const arr = text.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newtext = arr.join(" ");
    setText(newtext);
    props.showAlert("Capitalize the text ! ", "success");
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
    props.showAlert("Capitalize first letter of each word ! ", "success");
  };

  //  function to copy the text to the clipboard
  const handleReverseString = () => {
    let arr = text.split(" ");
    arr = arr.reverse();
    const newtext = arr.join(" ");
    setText(newtext);
    props.showAlert("Text is Reversed ! ", "success");
  };

  //function to copy the text on clipboard
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard ! ", "success");
  };

  const RemoveExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra-Spaces Removed ! ", "success");
  };

  // arrow function to handle additon of text in the textarea
  const handleOnChange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
  };

  // Creating a state to change to text to uppercase lowercase or some other operation.
  const [text, setText] = useState(" ");
  // setText("new text");  //correct way to set the text
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label ">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control "
          id="mybox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
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
        <button
          className="btn btn-primary  my-3 mx-1"
          onClick={handleCapitalize}
        >
          Capitalize Case
        </button>
        <button
          className="btn btn-primary my-3  mx-1"
          onClick={handleFirstLetter}
        >
          Capitalize After FullStop
        </button>
        <button
          className="btn btn-primary my-3  mx-1"
          onClick={handleReverseString}
        >
          Reverse Text
        </button>

        <button className="btn btn-primary my-3  mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-primary  my-3 mx-1"
          onClick={RemoveExtraSpaces}
        >
          Remove ExtraSpaces
        </button>

        <button className="btn btn-primary  my-3 mx-1" onClick={handleclear}>
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </div>
  );
}
