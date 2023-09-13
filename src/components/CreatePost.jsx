import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function CreatePost() {
    const [post, setPost] = useState({ title: '', content: '' });
    const baseURL = "https://blogpost-backend-v3oj.onrender.com";
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            await axios.post(`${baseURL}/posts`, { post: post }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // Clear the form fields
            setPost({ title: '', content: '' });

            // Navigate to /dashboard/myposts
            navigate('/dashboard/myposts');
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="m-4 md:m-8 lg:m-16 p-6 rounded-md bg-white shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl mb-6 font-bold text-center border-b pb-3">Create a Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-2 font-bold">TITLE</label>
                    <input 
                        type="text" 
                        id="title"
                        name="title" 
                        value={post.title} 
                        onChange={handleChange} 
                        placeholder="Enter the title"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block mb-2 font-bold">Content</label>
                    <textarea 
                        id="content"
                        name="content" 
                        value={post.content} 
                        onChange={handleChange} 
                        placeholder="Write your post here..."
                        rows="5"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">PUBLISH</button>
            </form>
        </div>
    );
}

export default CreatePost;


