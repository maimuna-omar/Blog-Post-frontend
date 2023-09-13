import React from 'react'
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div className='home-container h-screen bg-[url("https://img.freepik.com/free-photo/blue-surface-with-study-tools_23-2147864592.jpg")] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center'>
       
       <h1 className='text-6xl font-bold text-blue-600 mb-2 ml-1'>Welcome to a Free Mind Blog Post</h1>
       <h2 className='text-3xl text-black-700 font-bold mb-8'>your place to share your thoughts and ideas.</h2>

       <div className='navigation-links flex space-x-4'> 
           <Link to="/login" className="bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">LOGIN</Link>
           <Link to="/register" className="bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">REGISTER</Link>
       </div>
    </div>
  )
}
export default LandingPage;


