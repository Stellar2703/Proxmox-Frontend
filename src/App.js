// import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import HomePage from './Pages/Homepage';
import Speedometer from './Components/Speedometer';
import ContainerAnalytics from './Pages/ContainerViewPage';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <div className="loginpage">
        <Header/>
        <Navbar />
        {/* <HomePage /> */}
        {/* <ContainerAnalytics/>  */}
        <Login /> 
      </div>
    </div>
  );
}


export default App;
