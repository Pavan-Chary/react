import logo from './logo.svg';
import './App.css';
import Navba from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from 'react'

function App() {
  const [mode,setMode] = useState("light")
  const [myStyle,setMyStyle] = useState({
    color:'black',
    backgroundColor:'white', 
    border:'2px solid black'
  })
  const handleOnClick = ()=>{
    console.log("Hello");
      if(mode==="light"){
        setMode("dark");
        setMyStyle({
          color:'white',
          backgroundColor:'black',
           border:'2px solid white'
        })
        document.body.style.backgroundColor='black';
      }
      else{
        setMode("light");
        setMyStyle({
          color:'black',
          backgroundColor:'white',
           border:'2px solid black'
        })
        document.body.style.backgroundColor='white';
      }
  }

  return (
    <>
    <Navba title="Chary" mode={mode} myStyle={myStyle} func={handleOnClick}/>
      <div className="container">
      <TextForm heading="Enter something" mode={mode} myStyle={myStyle} func={handleOnClick}/>
      <About mode={mode} myStyle={myStyle} func={handleOnClick}/>
      </div>
  </>
  );
}

export default App;
