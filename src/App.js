import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'


const list = [
  {id: 1, name: "John Doe", Age: 28},
  {id: 2, name: "Jane Doe", Age: 45},
  {id: 3, name: "John Smith", Age: 32}
]

function App() {
  return (
    <>
      <Navbar />
      <Home />
      
    </>
  );
}

export default App;
