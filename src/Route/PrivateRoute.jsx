/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const email = localStorage.getItem('userEmail');
  return email ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;