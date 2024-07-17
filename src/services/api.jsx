import axios from "axios";

const API_URL = "http://localhost:3001";

const register = async (userData) => {
  const response = await axios.post('http://localhost:3001/users', userData);
  return response.data;
};

// const { mutateAsync } = useMutation({
//   mutationFn: async (userData) => {
//     await axios.post(`http://localhost:3001/users`, userData);
//   },
//   onSuccess: () => {
//     Navigate("/");
//     // toast.success("Job posted successfully!");
//   },
// });

const login = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};

const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

const getUserByEmail = (userEmail) => {
  try {
    return axios.get(`${API_URL}/users/${userEmail}`);
  } catch {
    console.log('user not found')
  }
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
  getUserByEmail,
  updateUser,
  sendMoney,
  cashOut,
  cashIn,
  getBalance,
  getTransactionHistory,
};
