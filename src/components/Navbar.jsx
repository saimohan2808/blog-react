import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Plus, FileText } from 'lucide-react'; 

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-4 flex justify-between items-center shadow-lg">
      
      <div className="flex items-center space-x-4 ml-4">
        
        <img
          src="src/assets/blog.png" 
          alt="Logo"
          className="w-12 h-12"
        />
        <h1 className="text-3xl font-bold text-white font-sans italic">REBEL SCRIPTS</h1>
      </div>

     
      <div className="flex space-x-6 mr-4">
        <Link to="/" className="text-white flex items-center space-x-2 hover:underline">
          <Home />
          <span>Home</span>
        </Link>
        <Link to="/add-blog" className="text-white flex items-center space-x-2 hover:underline">
          <Plus />
          <span>Add Blog</span>
        </Link>
        <Link to="/all-blogs" className="text-white flex items-center space-x-2 hover:underline">
          <FileText />
          <span>All Blogs</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
