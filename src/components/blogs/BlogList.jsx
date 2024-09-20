import React from 'react';
import { Link } from 'react-router-dom';
import './bloglist.css'; 
import performance from "../../../public/Blogs/performance.png"
import cookies from "../../../public/Blogs/react-cookies.jpeg"
import sessions from "../../../public/Blogs/Sessions.png"

//Performance

//Cookies 

//Sessions

//Mistakes

//Code Practice

//State Management 

//hydration

//Authentication

//Forms

//Testing 

//Module Bundler

//cors



const blogs = [
  { id: 1, title: "Performance", description: "This is a short description", image: performance },
  { id: 2, title: "Cookies", description: "This is another description", image: cookies },
  { id: 2, title: "Sessions", description: "This is another description", image: sessions },
  { id: 2, title: "Sessions", description: "This is another description", image: sessions },
  // Add more blogs here...
];

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-card" key={blog.id}>
          <div className="Card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          </div>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;