import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavigationMenu() {
  const navigate = useNavigate();

  async function handleLogout() {
    // Get token from localStorage
    const token = localStorage.getItem('token');
  
    const baseURL = "http://127.0.0.1:3001/logout";
  
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
        {/* <li>
          <Link to="/dashboard/edit-profile" className="text-black font-extrabold hover:text-yellow-500">
            EDIT PROFILE
          </Link>
        </li>
        <li>
          <Link to="/dashboard/notifications" className="text-black font-extrabold hover:text-yellow-500">
            NOTIFICATIONS
          </Link>
        </li> */}

          {/* <Link to="/dashboard/editpost/:postId" className="text-black font-extrabold hover:text-yellow-500">
            EDIT POST
          </Link> */}


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
