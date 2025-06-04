import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Background from './components/Background';
import Login from './components/Login';
import Signup from './components/Signup';
import Module from './components/Module';
import Configuration from './components/Configuration';
import Operator from './components/Operator';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Background>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/module">Module</Link>
            </li>
            <li>
              <Link to="/configuration">Configuration</Link>
            </li>
            <li>
              <Link to="/operator">Operator</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/module" element={<Module />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/operator" element={<Operator />} />
        </Routes>
      </Background>
    </Router>
  );
}

export default App;
