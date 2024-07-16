import React, { useState } from 'react';
import { sendMoney } from '../../services/api';

const SendMoneyForm = () => {
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMoney({ senderId, receiverId, amount, pin });
      setMessage('Money sent successfully');
    } catch (error) {
      setMessage('Failed to send money');
      console.error('Send money error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={senderId} onChange={(e) => setSenderId(e.target.value)} placeholder="Sender ID" required />
      <input type="text" value={receiverId} onChange={(e) => setReceiverId(e.target.value)} placeholder="Receiver ID" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="number" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="PIN" required />
      <button type="submit">Send Money</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SendMoneyForm;
