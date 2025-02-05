import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import AddBlog from './components/AddBlog';
import AllBlogs from './components/AllBlogs';
import BlogDetails from './components/BlogDetails';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);
  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/add-blog" element={<AddBlog addBlog={addBlog} />} />
          <Route path="/all-blogs" element={<AllBlogs blogs={blogs} />} />
          <Route path="/blog/:id" element={<BlogDetails blogs={blogs} setBlogs={setBlogs} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
