import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthContainer.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const clearError = () => setError('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });

      login(response.data.token, response.data.username);

      navigate('/chat');
    } catch (error) {
      setError('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          data-test-id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          data-test-id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button data-test-id="login-button" type="submit">Login</button>
      </form>
      {error && <ErrorMessage message={error} clearError={clearError} />}
      <p className="auth-container__link">
        Don't have an account?
        &nbsp;<Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
