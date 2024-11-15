import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/chat" />} />
          <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/chat" />} />
          <Route path="/chat" element={isLoggedIn ? <Chat /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/chat" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;