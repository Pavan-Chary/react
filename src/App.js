import logo from './logo.svg';
import './App.css';
import Navba from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {useState} from 'react'


function App() {
  const [mode,setMode] = useState("light")
  const [myStyle,setMyStyle] = useState({
    color:'black',
    backgroundColor:'white', 
    border:'2px solid black'
  })
  const [alert,setAlert] = useState(null);
  const showAlert=(type,message)=>{
      setAlert({
        msg:message,
        type:type
      });
  }
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
        showAlert("success","Dark mode enabled");
      }
      else{
        setMode("light");
        setMyStyle({
          color:'black',
          backgroundColor:'white',
           border:'2px solid black'
        })
        document.body.style.backgroundColor='white';
        showAlert("success","Light mode enabled");
      }
  }

  return (
    <>
    <Navba title="Chary" mode={mode} myStyle={myStyle} func={handleOnClick}/>
    <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Enter something" mode={mode} myStyle={myStyle} func={handleOnClick}  showAlert={showAlert}/>
      <About mode={mode} myStyle={myStyle} func={handleOnClick}/>
      </div>
  </>
  );
}

export default App;
