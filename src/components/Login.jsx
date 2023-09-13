import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = "http://127.0.0.1:3001";

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous error messages
    setMessage('');

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(userData.email)) {
      setMessage('Please enter a valid Gmail address (e.g., user@gmail.com)');
      return;
    }

    // Validate password length
    if (userData.password.length < 8 || userData.password.length > 10) {
      setMessage('Password must be between 8 and 10 characters.');
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/login`, userData);
      localStorage.setItem('userId', response.data.user.id); // Use response.data.user.id
      localStorage.setItem('token', response.data.token);

            setMessage('Login successful!');
      // After successful login

      
      
      navigate('/dashboard'); 
      
      // Clear input fields
      setUserData({
        email: '',
        password: '',
      });
    } catch (error) {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-black mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black font-bold text-xl mb-1">Email:</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold text-xl mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded font-bold hover:bg-blue-700 w-full"
          >
           LOGIN
          </button>
        </form>
        {message && <p className="mt-4 text-red-600 font-bold">{message}</p>}
      </div>
      <Link to="/" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 hover:bg-yellow-600">
        HOME
      </Link>
    </div>
  );
}

export default Login;


