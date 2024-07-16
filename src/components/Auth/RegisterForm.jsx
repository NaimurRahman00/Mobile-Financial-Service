import React, { useState } from 'react';
import { register } from '../../services/api'; // Assuming you have an API service for registration

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Assuming 'register' function from API service handles registration
            await register({ name, pin, mobileNumber, email });

            // Reset form fields after successful registration
            setName('');
            setPin('');
            setMobileNumber('');
            setEmail('');

            // Display success message
            setMessage('Registration successful');
        } catch (error) {
            setMessage('Registration failed');
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl font-semibold mb-4 text-center">User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pin" className="block text-sm font-medium text-gray-700">5-digit PIN</label>
                        <input
                            type="number"
                            id="pin"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter 5-digit PIN"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            required
                            pattern="\d{5}" // Ensures exactly 5 digits
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your mobile number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">User status: Pending (Approval needed by admin)</span>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Register
                        </button>
                    </div>
                    {message && <p className="mt-2 text-center text-sm text-red-500">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
