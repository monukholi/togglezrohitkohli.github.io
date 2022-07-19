import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = " ";
        setText(newText);
    }

 
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text = "Hello hii" //wrong way to change the state
    // setText = ("hello and welcome") //correct way to change the state
    return (
        <>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder=''></textarea>
            <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleClClick}>Clear</button>
        </div>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> chracters</p>
        <p><b>{0.008 * text.split(" ").length }</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
