import React from 'react';
import { Link } from 'react-router-dom';

const AllBlogs = ({ blogs }) => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen">
      <h1 className="text-4xl text-center text-white mb-8">All Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold text-center">
                <Link to={`/blog/${blog.title}`}>{blog.title}</Link> 
              </h3>
              <p className="text-center">{blog.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
