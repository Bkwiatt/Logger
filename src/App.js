import './App.css';
import SplashScreen from './components/splashscreen'
import Home from './components/home'
import Todo from './components/TodoList/index'
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
      </Routes>
    </Router>
      
      {/* <Navbar />
      <Home /> */}
    </>
  );
}

export default App;
