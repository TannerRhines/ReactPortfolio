import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    // Regex for email validation
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email
    if (validateEmail(email)) {
      setEmailError(false);
      
      console.log('Form data submitted:', { name, email, message });
    } else {
      setEmailError(true);
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <br />
        {emailError && <p style={{ color: 'red' }}>Invalid email address</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
