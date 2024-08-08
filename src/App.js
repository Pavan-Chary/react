import logo from './logo.svg';
import './App.css';
import Navba from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navba title="Chary"/>
      <div className="container">
      <TextForm heading="Enter something"/>
      </div>
  </>
  );
}

export default App;
