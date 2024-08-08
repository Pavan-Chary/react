import React,{useState}from 'react'

export default function TextForm(prop){
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
        <div>

            <h3 className="container">{prop.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick = {handleUppercase}>convert to uppercase</button>
        </div>

    );
}