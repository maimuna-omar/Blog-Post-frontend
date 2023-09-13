import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationMenu from './NavigationMenu';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const baseURL = "http://127.0.0.1:3001";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userID = localStorage.getItem('userId'); // Retrieve userID from localStorage
        console.log("UserID:", userID); // Log userID to check if it's defined

        // Check if userID exists before making a request
        if (!userID) {
          throw new Error("User ID is undefined!");
        }

        const response = await axios.get(`${baseURL}/users/${userID}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-black p-2 flex justify-start items-center">
        <h1 className="text-2xl font-extrabold italic uppercase">WELCOME, {userData?.username}</h1>
      </header>
      <main className="container mx-auto p-0">
        <NavigationMenu />
      </main>
    </div>
  );
}

export default Dashboard;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavigationMenu from './NavigationMenu';
// function Dashboard() {
//   const [userData, setUserData] = useState(null);
//   const baseURL = "http://127.0.0.1:3001";

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userID = localStorage.getItem('userId'); // Retrieve userID from localStorage
//         console.log("UserID:", userID); // Log userID to check if it's defined

//         // Check if userID exists before making a request
//         if (!userID) {
//           throw new Error("User ID is undefined!");
//         }

//         const response = await axios.get(`${baseURL}/users/${userID}`);
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);  

//   return (
//     <div>
//       {userData ? (
//         <>
//           <h1>Welcome, {userData.username}</h1>
//           <p>Email: {userData.email}</p>
//           <NavigationMenu />
//         </>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// }

// export default Dashboard;
