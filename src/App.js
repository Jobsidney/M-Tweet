import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="p-2">
    
      <Router>

        <Routes>
        <Route exact path="" element={<LandingPage/>}></Route>
        <Route exact path="/LoginPage" element={<LoginPage />}></Route>
        <Route exact path="/SignupPage" element={<SignupPage />}></Route>
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
