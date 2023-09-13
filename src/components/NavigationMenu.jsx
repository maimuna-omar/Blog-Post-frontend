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
          <Link to="/dashboard/new-post" className="text-black font-extrabold hover:text-yellow-500">
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
    navigate('/landingpage');
  }
}

export default NavigationMenu;




// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function NavigationMenu() {
//   const navigate = useNavigate();

//   return (
//     <nav>
//       <ul className='flex justify-around'>
//         <li><Link to="/dashboard/posts">My Posts</Link></li>
//         <li><Link to="/dashboard/new-post">Create Post</Link></li>
//         <li><Link to="/dashboard/edit-profile">Edit Profile</Link></li>
//         <li><Link to="/dashboard/notifications">Notifications</Link></li>
//         <li><button onClick={handleLogout}>Logout</button></li>
//       </ul>
//     </nav>
//   );

//   function handleLogout() {
//     localStorage.removeItem('userId');
//     localStorage.removeItem('token');

//     // Navigate the user back to the login page or landing page.
//     navigate('/landingpage');
//   }
// }

// export default NavigationMenu;
