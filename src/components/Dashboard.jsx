import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdOutlinePayment } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { IoCashOutline, IoLogOut } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";

const Dashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(200);
  const [showBalance, setShowBalance] = useState(false);

  const handleShowBalance = () => {
    setShowBalance(true);
    setTimeout(() => {
      setShowBalance(false);
    }, 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-gradient-to-t from-gray-800 to-gray-900 shadow-md"
      >
        <div className="p-4 border-b border-gray-700">
          <span className="text-3xl text-white/80">Dashboard</span>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <MdOutlinePayment />
              <span className="ml-2">Send Money</span>
            </li>
            <li className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <IoCashOutline />
              <span className="ml-2">Cash Out</span>
            </li>
            <li className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <TbCoinTakaFilled />
              <span className="ml-2">Cash In</span>
            </li>
            <li className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <FaReceipt />
              <span className="ml-2">Transaction History</span>
            </li>
            <li className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <AiOutlineSetting className="text-lg" />
              <span className="ml-2">Setting</span>
            </li>
            <li className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg">
              <button
                onClick={handleLogout}
                className="w-full flex items-center text-left"
              >
                <IoLogOut className="mr-2" /> Logout
              </button>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Navbar */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Welcome, Naimur</h1>
          <div className="flex items-center space-x-4">
            <FiSearch className="text-xl" />
            <FiBell className="text-xl" />
            <FiUser className="text-xl" />
          </div>
        </div>

        {/* Main widgets */}
        <div className="grid grid-cols-1 gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow"
          >
            <h2 className="text-4xl font-semibold">My Balance</h2>
            <div className="flex items-center justify-between">
              <div className="w-20">
                {" "}
                {showBalance && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-2xl"
                  >
                    ${balance}
                  </motion.p>
                )}
              </div>
              <button
                className="mt-2 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-900 transition duration-300"
                onClick={handleShowBalance}
              >
                Show Balance
              </button>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow"
          >
            <h2 className="text-lg font-semibold">Send Money</h2>
            <Link to="/send-money" className="mt-2 text-white hover:underline">
              Go to Send Money
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow"
          >
            <h2 className="text-lg font-semibold">Cashout</h2>
            <Link to="/cashout" className="mt-2 text-white hover:underline">
              Go to Cashout
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow"
          >
            <h2 className="text-lg font-semibold">Cashin</h2>
            <Link to="/cashin" className="mt-2 text-white hover:underline">
              Go to Cashin
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-gradient-to-r from-yellow-500 to-green-500 text-white rounded-lg shadow"
          >
            <h2 className="text-lg font-semibold">Transaction History</h2>
            <Link
              to="/transaction-history"
              className="mt-2 text-white hover:underline"
            >
              Go to Transaction History
            </Link>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
