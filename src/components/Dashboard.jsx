import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      {userData ? (
        <>
          <h1>Welcome, {userData.username}</h1>
          <p>Email: {userData.email}</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;
