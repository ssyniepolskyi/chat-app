import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthContainer.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const clearError = () => setError('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords don\'t match');
      
      return;
    }

    if (password === '' || username === '') {
      setError('Password and Username fields should not be empty');
      
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
      });

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (err) {
      setError('Error registering user. User may already exist.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
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
        <input
          data-test-id="register-confirm-password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button data-test-id="register-button" type="submit">Register</button>
      </form>
      {error && <ErrorMessage message={error} clearError={clearError} />}
      <p className="login-container__link">
        Have an account?
        &nbsp;<Link to="/login">Log in now</Link>
      </p>
    </div>
  );
};

export default Register;