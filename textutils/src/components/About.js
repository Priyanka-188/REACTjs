// import React ,{useState}from "react";

export default function About(props) {
  
  // definig state
  // const [myStyle,setmyStyle] = useState( {
  //   color:'black',
  //   backgroundColor:'white',
  // })
  let myStyle = {
    color: props.mode==='dark'? 'white':'#052c65',
    backgroundColor :props.mode ==='dark'?'rgb(36 74 104)':'white',
  }



  return (
    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#052c65',}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextFun</strong> gives you a way to analyze your text quicklyt and efficeiently.Be it word count , charachter count or time estimator to read the text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextFun is a free counter tool that provides instant character count and word count statistics for a text. TextForm reports the number of words and characters . Thus it is suitable for writing text with word/character linit.
            </div>
          </div>
        </div>
        <div className="accordion-item"style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            THis word counter software works in any web broesers such as Chrome , Firefox,Internet Exploreer , Safari, Opera suits to count character in facebook , blog books excel, document, pdf docuement , essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      
      </div>
     
    </div>
  );
}
