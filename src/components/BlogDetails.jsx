import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams(); 
  const blog = blogs.find((b) => b.title === id);

  if (!blog) {
    return <p>Blog not found</p>; 
  }

  const [liked, setLiked] = useState(blog.liked || false);
  const [likeCount, setLikeCount] = useState(blog.likeCount || 0);
  const [comments, setComments] = useState(blog.comments || []);
  const [newComment, setNewComment] = useState('');
  const navigate = useNavigate();
  const handleLike = () => {
    const updatedLikeStatus = !liked;
    const updatedLikeCount = updatedLikeStatus ? likeCount + 1 : likeCount - 1;
    setLiked(updatedLikeStatus);
    setLikeCount(updatedLikeCount);
    const updatedBlogs = blogs.map((b) =>
      b.title === blog.title ? { ...b, liked: updatedLikeStatus, likeCount: updatedLikeCount } : b
    );
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };
  const handleDelete = () => {
    const updatedBlogs = blogs.filter((_, index) => blogs[index].title !== blog.title);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate('/all-blogs'); 
  };
  const handleComment = () => {
    const updatedBlogs = [...blogs];
    updatedBlogs[blogs.indexOf(blog)].comments = [...comments, newComment];
    setComments([...comments, newComment]);
    setNewComment('');
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };
  const handleEdit = () => {
    const updatedTitle = prompt("Edit Blog Title:", blog.title);
    const updatedContent = prompt("Edit Blog Content:", blog.content);

    if (updatedTitle && updatedContent) {
      const updatedBlogs = [...blogs];
      updatedBlogs[blogs.indexOf(blog)] = { 
        ...updatedBlogs[blogs.indexOf(blog)], 
        title: updatedTitle, 
        content: updatedContent 
      };
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    }
  };
  const handleBack = () => {
    navigate('/all-blogs');
  };

  return (
    <div className="p-8 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 min-h-screen">
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-lg text-gray-700 mb-4">By {blog.author}</p>

        {blog.image && <img src={blog.image} alt="Blog Image" className="w-full h-60 object-cover rounded-lg mb-4 border-solid border-black border-2" />}

        <p className="text-lg mb-4">{blog.content}</p>


        <div className="flex items-center">
          <button
            onClick={handleLike}
            className={`bg-${liked ? 'red' : 'gray'}-500 text-white px-4 py-2 rounded-lg m-3`}
          >
            {liked ? 'Unlike' : 'Like'}
          </button>
          <span className="ml-4">{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</span>
        </div>
        <button
          onClick={handleEdit}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Edit Blog
        </button>

        <button
          onClick={handleDelete}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Delete Blog
        </button>

        <button
          onClick={handleBack}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Back to All Blogs
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <div className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 border rounded-lg"
              rows="4"
            />
            <button
              onClick={handleComment}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Add Comment
            </button>
          </div>
          <div>
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
                <p>{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
