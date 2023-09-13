// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationMenu from './NavigationMenu';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const baseURL = "http://127.0.0.1:3001";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userID = localStorage.getItem('userId');
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
      <NavigationMenu />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;




