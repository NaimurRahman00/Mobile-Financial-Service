import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/users">User List</Link></li>
            <li><Link to="/send-money">Send Money</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        &copy; 2024 MFS Application
      </footer>
    </div>
  );
};

export default Layout;
