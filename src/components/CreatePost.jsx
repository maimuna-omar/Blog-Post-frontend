import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [post, setPost] = useState({ title: '', content: '' });
  const baseURL = "http://127.0.0.1:3001";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/posts`, post);
      // Handle success - maybe redirect to dashboard or to the new post
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={post.title} 
        onChange={handleChange} 
        placeholder="Title" 
      />
      <textarea 
        name="content" 
        value={post.content} 
        onChange={handleChange} 
        placeholder="Write your post here..." 
      />
      <button type="submit">Publish</button>
    </form>
  );
}

export default CreatePost;
