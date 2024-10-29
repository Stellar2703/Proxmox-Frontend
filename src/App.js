// // import logo from './logo.svg';
// import './App.css';
// import Login from './Pages/Login';
// import { BrowserRouter as Router, Route, Routes , useLocation } from 'react-router-dom';
// import Navbar from './Pages/Navbar';
// import HomePage from './Pages/Homepage';
// import ContainerAnalytics from './Pages/ContainerViewPage';
// import Header from './Components/Header';
// // import TerminalComponent from './Components/Terminal';
// import { useEffect, useState } from 'react';


// function Navigation() {
//   const location = useLocation();
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     // Update showNavbar based on the current path
//     if(location.pathname === '/login'){
//       setShowNavbar(false);
//     } else {
//       setShowNavbar(true);
//     }
//   }, [location]);
//   return (
//     <div>
//       <Header /> {/* Visible on all routes */}
//       {showNavbar && <Navbar />} {/* Visible only on specific routes */}
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/homepage" element={<HomePage />} />
//         <Route path="/containeranalytics" element={<ContainerAnalytics />} />
//         {/* <Route path="/test" element={<VMs />} /> */}
//         {/* Add other routes here as needed */}
//       </Routes>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Navigation />
//     </Router>
//   );
// }

// src/App.js

import React, { useEffect, useState } from 'react';
import { getNodes } from './ProxmoxService';

function App() {
  const [nodes, setNodes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const nodesData = await getNodes();
        setNodes(nodesData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNodes();
  }, []);

  return (
    <div>
      <h1>Proxmox Nodes</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {nodes.map(node => (
          <li key={node.node}>{node.node}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;