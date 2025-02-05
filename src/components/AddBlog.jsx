import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(''); 

  const navigate = useNavigate(); 

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
    }
  };

  const handleSave = () => {
    // Check if any of the fields are empty
    if (!title || !author || !content || !image) {
      setWarningMessage('All fields are required, including an image!'); 
      return; 
    }
    setWarningMessage('');
    const newBlog = {
      title,
      author,
      content,
      image,
    };
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    storedBlogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(storedBlogs));
    addBlog(newBlog);
    setTitle('');
    setAuthor('');
    setContent('');
    setImage(null);

    navigate('/all-blogs');
  };

  const handleCancel = () => {
    setTitle('');
    setAuthor('');
    setContent('');
    setImage(null);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-opacity-50">
      <div className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
        <div className="mb-4">
          <label className="block text-lg mb-2">Blog Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter blog title"
          />
     
          {!title && warningMessage && (
            <p className="text-red-500 text-sm mt-1">{warningMessage}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter blog author"
          />

          {!author && warningMessage && (
            <p className="text-red-500 text-sm mt-1">{warningMessage}</p>
          )}
        </div>


        <div className="mb-4">
          <label className="block text-lg mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Write your blog content here..."
            rows="5"
          />
          {!content && warningMessage && (
            <p className="text-red-500 text-sm mt-1">{warningMessage}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded-lg"
          />
          {!image && warningMessage && (
            <p className="text-red-500 text-sm mt-1">{warningMessage}</p>
          )}
        </div>

        {image && (
          <div className="mb-4">
            <img src={image} alt="Preview" className="w-full h-auto rounded-lg" />
          </div>
        )}

        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Save Blog
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
