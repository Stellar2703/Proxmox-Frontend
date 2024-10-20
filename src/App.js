import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import HomePage from './Pages/Homepage';
import Speedometer from './Components/Speedometer';
import ContainerAnalytics from './Pages/ContainerViewPage';


function App() {
  return (
    <div className="App">
      <div className="loginpage">
        <Navbar />
        <HomePage />
        {/* <ContainerAnalytics/> */}
        {/* <Login />   */}
        {/* <Speedometer speed={473} /> */}
      </div>
    </div>
  );
}


export default App;
