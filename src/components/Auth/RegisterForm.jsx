import React, { useState } from 'react';
import { register } from '../../services/api';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({ name, pin, mobileNumber, email });
      setMessage('Registration successful');
    } catch (error) {
      setMessage('Registration failed');
      console.error('Registration error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="PIN (5 digits)" required />
      <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegisterForm;
