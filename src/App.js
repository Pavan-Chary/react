import logo from './logo.svg';
import './App.css';
import Navba from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
    <Navba title="Chary"/>
      <div className="container">
      {/* <TextForm heading="Enter something"/> */}
      <About/>
      </div>
  </>
  );
}

export default App;
