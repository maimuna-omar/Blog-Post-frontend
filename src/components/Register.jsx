import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = "http://127.0.0.1:3001";

function Register() {
  const initialUserData = {
    username: '',
    email: '',
    password: ''
  };

  const [userData, setUserData] = useState(initialUserData);
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

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
    setEmailError('');
    setPasswordError('');

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(userData.email)) {
      setEmailError('Please enter a valid Gmail address (e.g., user@gmail.com)');
      return;
    }

    // Validate password length
    if (userData.password.length < 8 || userData.password.length > 10) {
      setPasswordError('Password must be between 8 and 10 characters.');
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/users`, { user: userData });
      localStorage.setItem('token', response.data.token);
      setMessage('Registered successfully!');
      // Clear input fields
      setUserData(initialUserData);
      navigate('/login'); 
    } catch (error) {
      setMessage('Registration failed.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-black mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black font-bold mb-1">Username:</label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-1">Email:</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded"
            />
            {emailError && <p className="text-red-600 font-bold">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded"
            />
            {passwordError && <p className="text-red-600 font-bold">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded font-bold hover:bg-blue-700 w-full"
          >
            REGISTER
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
      <Link to="/" className="bg-yellow-400 text-black font-bold font py-2 px-4 rounded mt-4 hover:bg-yellow-600">
        HOME
      </Link>
    </div>
  );
}

export default Register;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const baseURL = "http://127.0.0.1:3001";

// function Register() {
//   const [userData, setUserData] = useState({
//     username: '',
//     email: '', // added email here
//     password: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${baseURL}/users`, { user: userData });
//       setMessage('Registered successfully!');
//     } catch (error) {
//       setMessage('Registration failed.');
//     }
//   }

//   return (
//     <div>
//       <h1>Register</h1>
//       <Link to="/">Home</Link>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" name="username" value={userData.username} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="text" name="email" value={userData.email} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" value={userData.password} onChange={handleChange} />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Register;
