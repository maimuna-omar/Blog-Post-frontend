import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function PostEditor() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' }); // Set default values
  const baseURL = "https://blogpost-backend-v3oj.onrender.com";

  useEffect(() => {
    if (postId) { // Check for the existence of postId
      const fetchPost = async () => {
        try {
          const token = localStorage.getItem('token'); 

          const response = await axios.get(`${baseURL}/posts/${postId}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setPost(response.data);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };

      fetchPost();
    }
  }, [postId]);

  const updatePost = async () => {
    try {
      const token = localStorage.getItem('token'); 

      const response = await axios.put(`${baseURL}/posts/${postId}`, post, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        navigate('/dashboard/myposts');
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async () => {
    try {
      const token = localStorage.getItem('token'); 

      const response = await axios.delete(`${baseURL}/posts/${postId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 204) {
        navigate('/dashboard/myposts');
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-xl">
      <h3 className="text-4xl font-bold mb-4">Edit Post</h3>
      <div className="mb-6">
        <label htmlFor="title" className="block text-3xl font-bold">Title</label>
        <input
          type="text"
          id="title"
          value={post.title}
          onChange={(e) => setPost((prevState) => ({ ...prevState, title: e.target.value }))}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="content" className="block text-3xl font-bold">Content</label>
        <textarea
          id="content"
          value={post.content}
          onChange={(e) => setPost((prevState) => ({ ...prevState, content: e.target.value }))}
          className="w-full p-3 border rounded-lg"
          rows="6"
        ></textarea>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={updatePost} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
          Update Post
        </button>
        <button onClick={deletePost} className="bg-blue-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default PostEditor;



