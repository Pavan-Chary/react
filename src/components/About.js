import React, {useState}from 'react' 

export default function(){
    const [btText,setBtText] = useState("Dark Mode")
    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor:'white',
        border:'1.5px solid black'
    })

    const handleOnClick=()=>{
        console.log("Clicked");
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1.5px solid blue'
            });
            setBtText("Light Mode");
        }
        else{
            
                setMyStyle({
                    color:'black',
                    backgroundColor:'white',
                    border:'1.5px solid black'
                });
                setBtText("Dark Mode");
            }
        
        }
    return (
        <>
            <div className="container" style={myStyle}>
                <h3>hello Guru</h3>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>{btText}</button>
        </>
    )
}