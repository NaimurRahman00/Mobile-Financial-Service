import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const register = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

const login = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

const getUserById = (userId) => {
  return axios.get(`${API_URL}/users/${userId}`);
};

const updateUser = (userId, userData) => {
  return axios.put(`${API_URL}/users/${userId}`, userData);
};

const sendMoney = (transactionData) => {
  return axios.post(`${API_URL}/transactions/send-money`, transactionData);
};

const cashOut = (transactionData) => {
  return axios.post(`${API_URL}/transactions/cash-out`, transactionData);
};

const cashIn = (transactionData) => {
  return axios.post(`${API_URL}/transactions/cash-in`, transactionData);
};

const getBalance = (userId) => {
  return axios.get(`${API_URL}/transactions/balance-inquiry/${userId}`);
};

const getTransactionHistory = (userId) => {
  return axios.get(`${API_URL}/transactions/transaction-history/${userId}`);
};

export {
  register,
  login,
  getUsers,
  getUserById,
  updateUser,
  sendMoney,
  cashOut,
  cashIn,
  getBalance,
  getTransactionHistory
};
