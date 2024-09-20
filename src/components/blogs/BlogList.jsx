import React from 'react';
import { Link } from 'react-router-dom';
import './bloglist.css'; 

const blogs = [
  { id: 1, title: "Blog Title 1", description: "This is a short description", image: "image1.jpg" },
  { id: 2, title: "Blog Title 2", description: "This is another description", image: "image2.jpg" },
  // Add more blogs here...
];

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-card" key={blog.id}>
          <div className="Card"></div>
          {/* <img src={blog.image} alt={blog.title} className="blog-image" /> */}
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;