import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import HomePage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <div className="loginpage">
        <Navbar />
        <HomePage />
        <Login />  
      </div>
    </div>
  );
}


export default App;
