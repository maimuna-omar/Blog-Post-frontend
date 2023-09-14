import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const baseURL = "https://blogpost-backend-v3oj.onrender.com/";
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get(`${baseURL}/user_posts`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-black text-5xl font-bold mb-6">MY POSTS</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-screen-xl">
        {posts.map(post => (
          <div key={post.id} className="bg-white border border-gray-800 rounded-lg overflow-hidden shadow-md mx-4">
            <div className="p-4">
              <h4 className="text-4xl font-semibold mb-2">{post.title}</h4>
              <p className="text-2xl mb-4">{post.content}</p> {/* Fixed the incomplete <p> tag */}
            </div>
            <div className="flex justify-end p-4">
              <button
                onClick={() => navigate(`/dashboard/edit-post/${post.id}`)}
                className="bg-blue-500 hover:bg-blue-700 text-white text-4xl font-bold py-2 px-4 rounded-full"
              >
                Edit Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPosts;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function MyPosts() {
//   const [posts, setPosts] = useState([]);
//   const baseURL = "https://blogpost-backend-v3oj.onrender.com/";
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchPosts() {
//       const token = localStorage.getItem('token');

//       try {
//         const response = await axios.get(`${baseURL}/user_posts`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     }

//     fetchPosts();
//   }, []);

//   return (
//     <div className="bg-gray-100 p-6">
//       <h2 className=" text-black text-5xl font-bold mb-6">MY POSTS</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {posts.map(post => (
//           <div key={post.id} className="bg-white border border-gray-800 rounded-lg overflow-hidden">
//             <div className="p-4">
//               <h4 className="text-4xl font-semibold mb-2">{post.title}</h4>
//               <p className="text-2xl mb-4">{post.content}</p>
//             </div>
//             <div className="flex justify-end p-4">
//               <button
//                 onClick={() => navigate(`/dashboard/edit-post/${post.id}`)}
//                 className="bg-blue-500 hover:bg-blue-100 text-white text-4xl font-bold py-2 px-4 rounded-full"
//               >
//                 Edit Post
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyPosts;
