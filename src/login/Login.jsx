import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        emailOrNumber,
        pin,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);

      setMessage('Login successful');
      // Redirect or handle successful login action
      window.location.href = '/dashboard'; // Replace with your desired redirect

    } catch (error) {
      setMessage(error.response.data.message || 'Login failed');
      console.error('Login failed', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="emailOrNumber" className="block text-sm font-medium text-gray-700">
              Email or Mobile Number
            </label>
            <input
              type="text"
              id="emailOrNumber"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your email or mobile number"
              value={emailOrNumber}
              onChange={(e) => setEmailOrNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
              PIN
            </label>
            <input
              type="password"
              id="pin"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
          {message && (
            <p className="mt-2 text-center text-sm text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
