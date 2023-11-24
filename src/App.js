import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Login from './login.js';
import Search from './pages/SearchPage.js'
import Summary from './pages/SummaryPage.js'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/" element={<Login/>}/>
          <Route path ="/search" element={<Search/>}/>
          <Route path ="/summary" element={<Summary/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;