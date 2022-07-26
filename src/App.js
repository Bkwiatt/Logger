import './App.css';
import SplashScreen from './components/splashscreen'
import Home from './components/home'
import Todo from './components/TodoList/index'
import Builder from './components/builder'
import Picklist from './components/picklist'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    <>  
    <Router>
      <Routes>
      {/* Home Screen */}
        <Route exact path="/" element={<SplashScreen />} />

        {/* Job Board */}
        <Route path="/job-board" element={<Home />}  />

        {/* To-Do List */}
        <Route path="/To-do" element={<Todo />}  />

        {/* Quote Builder */}
        <Route path="/Builder" element={<Builder />}  />

        {/* Material Pick List */}
        <Route path="/Picklist" element={<Picklist />}  />
      </Routes>
    </Router>
      
      {/* <Navbar />
      <Home /> */}
    </>
  );
}

export default App;
