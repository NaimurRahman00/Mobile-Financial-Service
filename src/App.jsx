import * as React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import UserList from './components/User/UserList';
import RegisterForm from './components/Auth/RegisterForm';
import SendMoneyForm from './components/Transaction/SendMoneyForm';
import { getUsers } from './services/api';

const App = () => {
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response.data);
    } catch (error) {
      console.error('Fetch users error:', error);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/register', element: <RegisterForm /> },
    { path: '/users', element: <UserList /> },
    { path: '/send-money', element: <SendMoneyForm /> },
  ];

  const router = createBrowserRouter({ routes });

  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
};

export default App;
