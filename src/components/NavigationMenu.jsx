import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavigationMenu() {
  const navigate = useNavigate();

  async function handleLogout() {
    // Get token from localStorage
    const token = localStorage.getItem('token');
  
        const baseURL = "https://blogpost-backend-v3oj.onrender.com/logout";
  
    try {
      const response = await fetch(baseURL , {
        method: 'DELETE', // Assuming your logout endpoint expects a DELETE request
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token // Sending the token in the headers
        }
      });
  
      // Check if the logout was successful
      if (response.ok) {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        navigate('/');
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("There was an error logging out", error);
    }
  }
  
  return (
    <nav className="bg-blue-300 p-4">
      <ul className="flex justify-around">
        <li>
          <Link to="/dashboard/myposts" className="text-black font-extrabold hover:text-yellow-500">
            MY POST
          </Link>
        </li>
        <li>
          <Link to="/dashboard/createpost" className="text-black font-extrabold hover:text-yellow-500">
            CREATE POST
          </Link>
        </li>
       

        <li>
          <button
            onClick={handleLogout}
            className="text-black font-extrabold hover:text-yellow-500"
          >
            LOGOUT
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default NavigationMenu;
