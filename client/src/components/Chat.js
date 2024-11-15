import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import ErrorMessage from './ErrorMessage';
import { useNavigate } from 'react-router-dom';
import '../styles/Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const { username, logout } = useAuth();
  const clearError = () => setError('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Cannot send an empty message.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/messages', { username, text: message });

      setMessages([...messages, response.data]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message', error);
    }

    setError('');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="chat-container">
      <button
        data-test-id="logout-button"
        className="logout-button"
        onClick={handleLogout}
      >
        Logout
      </button>
      <h2>Chat Room</h2>
      <div className="messages-container">
        {messages.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="message" data-test-id="chat-message">
              <strong>{msg.username}:</strong> {msg.text}
              <p>
                <small>Sent on: {new Date(msg.timestamp).toLocaleString('en-GB')}</small>
              </p>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          data-test-id="message-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="message-input"
        />
        <button 
          data-test-id="send-button"
          type="submit"
          className="send-button"
        >
          Send
        </button>
      </form>
      {error && <ErrorMessage message={error} clearError={clearError} />}
    </div>
  );
}

export default Chat;
