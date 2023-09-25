import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // State to track whether fields have been touched
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

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

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
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
            onBlur={() => handleBlur('name')}
            required 
          />
          {touched.name && !name && <p style={{ color: 'red' }}>This field is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input 
            type="email" 
            id="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
            required 
          />
          {touched.email && !email && <p style={{ color: 'red' }}>This field is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message"
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => handleBlur('message')}
            required 
          />
          {touched.message && !message && <p style={{ color: 'red' }}>This field is required</p>}
        </div>
        {emailError && <p style={{ color: 'red' }}>Invalid email address</p>}
        <button type="submit" className="submit-button">Submit</button>
        {emailSent && <p style={{ color: 'green' }}>Your email was sent 😊</p>}
      </form>
    </div>
  );
}
