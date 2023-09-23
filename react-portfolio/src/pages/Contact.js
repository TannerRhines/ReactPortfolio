import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // Moved inside the component

  const validateEmail = (email) => {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setEmailError(false);

      try {
        const response = await axios.post('http://localhost:3001/send-email', {
          name,
          email,
          message,
        });
        console.log('Email sent successfully:', response.data);

        // Clear the form fields and set emailSent to true
        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);

      } catch (error) {
        console.error('Error sending email:', error);
        setEmailSent(false);
      }
    } else {
      setEmailError(true);
    }
  }

  return (
    <div className="contact-container">
      <h1> feel free to reach out </h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input 
            type="email" 
            id="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message"
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        {emailError && <p style={{ color: 'red' }}>Invalid email address</p>}
        <button type="submit" className="submit-button">Submit</button>
        {emailSent && <p style={{ color: 'green' }}>your email was sent 😊</p>}
      </form>
    </div>
  );
}
