import React,{useState}from 'react'

export default function TextForm(props){
    const [text,setText] = useState("This is default text");
    const handleOnChange = (event)=>{
        console.log("hello" );
        setText(event.target.value);
    }
    const handleUppercase =()=>{
        console.log("Button CLicked");
        setText(text.toUpperCase());
        
    }
    return (

    <>
        <div>

            <h3 className="container" style={props.myStyle}>{props.heading}</h3>
            <div className="mb-3" style={props.myStyle}>
                <textarea className="form-control" style={props.myStyle} value={text} onChange = {handleOnChange}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick = {handleUppercase}>convert to uppercase</button>
        </div>
        <div className="container">
            <h3  style={props.myStyle}>Text Summary</h3>
            <p  style={props.myStyle}>{text.split(" ").length} words amd {text.length} charectes</p>
        </div>
    </>

    );
}