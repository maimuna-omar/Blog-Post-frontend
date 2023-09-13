import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavigationMenu() {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-300 p-4">
      <ul className="flex justify-around">
        <li>
          <Link to="/dashboard/posts" className="text-black font-extrabold hover:text-yellow-500">
            MY POST
          </Link>
        </li>
        <li>
          <Link to="/createpost" className="text-black font-extrabold hover:text-yellow-500">
            CREATE POST
          </Link>
        </li>
        <li>
          <Link to="/dashboard/edit-profile" className="text-black font-extrabold hover:text-yellow-500">
            EDIT PROFILE
          </Link>
        </li>
        <li>
          <Link to="/dashboard/notifications" className="text-black font-extrabold hover:text-yellow-500">
            NOTIFICATIONS
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

  function handleLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');

    // Navigate the user back to the login page or landing page.
    navigate('/');
  }
}

export default NavigationMenu;

