import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getUserByEmail } from "../../services/api";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user"); // Default role
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(0);

  const queryClient = useQueryClient();

  const registerUser = async (userData) => {
    const response = await axios.post("http://localhost:3001/users", userData);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      // Reset form fields after successful registration
      setName("");
      setPin("");
      setMobileNumber("");
      setEmail("");
      setRole("user");
      setMessage("Registration successful");
      queryClient.invalidateQueries("users"); // Adjust based on your query keys
      // Navigate to "/" route after successful registration
      window.location.href = "/"; // You can also use history.push('/') if using React Router

      // Store email and mobile number in local storage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userMobileNumber", mobileNumber);
    },
    onError: (error) => {
      setMessage(error.response.data.message || "Registration failed");
      console.error("Registration error:", error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate PIN
    if (!/^\d{5}$/.test(pin)) {
      setMessage("PIN must be exactly 5 digits.");
      return;
    }

    // Check if user already exists
    try {
      const response = await getUserByEmail(email);

      if (response.data && response.data.email === email) {
        setMessage(
          "User with this email already exists. Please use a different email."
        );
        return;
      }
    } catch {
      // setMessage("Error checking user existence.");
      // If user does not exist, proceed with registration
      mutation.mutate({
        name,
        pin,
        mobileNumber,
        email,
        balance,
        role,
        status: "pending",
      }); // Include role and status
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          User Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
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
            <label
              htmlFor="pin"
              className="block text-sm font-medium text-gray-700"
            >
              5-digit PIN
            </label>
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
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
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
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="agent">Agent</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              User status: Pending (Approval needed by admin)
            </span>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          </div>
          {message && (
            <p className="mt-2 text-center text-sm text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
