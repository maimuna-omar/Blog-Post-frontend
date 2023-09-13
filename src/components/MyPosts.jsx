import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function MyPosts() {
  const [posts, setPosts] = useState([]);
  const baseURL = "http://127.0.0.1:3001";
  const navigate = useNavigate();
  console.log(posts)

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
        navigate('/dashboard/myposts');
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-xl font-bold mb-6">Your Posts</h2>
      <ul>
      {posts.map(post => (
           <li key={post.id} className="bg-white shadow p-4 rounded mb-4">   
            <h4 className="text-md font-medium mb-2">{post.title}</h4>
            <p className="text-sm">{post.content}</p>
            <button onClick={() => navigate(`/dashboard/edit-post/${post.id}`)}>Go to Edit</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPosts;





