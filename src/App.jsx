import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import UserList from "./components/User/UserList";
import RegisterForm from "./components/Auth/RegisterForm";
import SendMoneyForm from "./components/Transaction/SendMoneyForm";
import { getUsers } from "./services/api";
import Login from "./login/Login";
import PrivateRoute from "./Route/PrivateRoute";

const App = () => {
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response.data);
    } catch (error) {
      console.error("Fetch users error:", error);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    { path: "/register", element: <RegisterForm /> },
    { path: "/login", element: <Login /> },
    { path: "/users", element: <UserList /> },
    { path: "/send-money", element: <SendMoneyForm /> },
  ]);

  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
};

export default App;
