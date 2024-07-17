import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        navigate('/login');
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="bg-gray-800 w-64">
                <div className="flex flex-col h-screen">
                    <div className="bg-gray-900 p-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-semibold">Dashboard</span>
                    </div>
                    <nav className="mt-4 flex-1">
                        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white">Dashboard</a>
                        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white">Analytics</a>
                        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white">Settings</a>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left py-2 px-4 text-gray-200 hover:bg-gray-700 hover:text-white active:bg-red-400"
                        >
                            Logout
                        </button>
                    </nav>
                </div>
            </div>

            {/* Main content area */}
            <div className="flex flex-col w-full">
                {/* Navbar */}
                <div className="bg-gray-900 p-4 flex justify-between items-center">
                    <span className="text-white text-2xl font-semibold">Welcome, User!</span>
                    <div>
                        <button className="text-gray-200 hover:text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Main content */}
                <main className="flex-grow p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Widget 1 */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-xl font-semibold mb-4">Sales Summary</h2>
                            <p>Insert Sales Chart Component here</p>
                        </div>

                        {/* Widget 2 */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
                            <p>Insert User Table Component here</p>
                        </div>

                        {/* Widget 3 */}
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                            <p>Insert Notifications Component here</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
