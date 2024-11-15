import React, { useEffect } from 'react';
import '../styles/ErrorMessage.css';

function ErrorMessage({ message, clearError }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000); // Dismiss after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [message, clearError]);

  if (!message) return null;

  return (
    <div className="error-message" data-test-id="error-message"> 
      <p>{message}</p>
      <button className="close-button" onClick={clearError}>
        &times;
      </button>
    </div>
  );
}

export default ErrorMessage;