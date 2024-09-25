import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./blog.css"
import { BsArrowLeft } from 'react-icons/bs'; // Import the back arrow icon
import { motion } from "framer-motion";
import pic2 from "../../../public/Blogs/performance/lazyloading.jpg"
import pic3 from "../../../public/Blogs/performance/Routing_lazing.jpg"
import pic4 from "../../../public/Blogs/performance/loadableComponent.jpg"

const blogs = [
  { id: 1,
     title: "Performance", 
     topic:<h2>Code Splitting :</h2>,
     content1: <div>As your React application grows, it can become large and complex. <br/>1 - To optimize performance, you can use lazy loading to load components only when needed. This reduces the initial load time of your application. <br />In React, this can be done with <strong>React.lazy() and Suspense</strong></div> ,
     content2:<div>2 - Code splitting becomes more effective when done with route-based components.<br /> Let’s split the code for different routes using <strong>React.lazy() and React Router.</strong> </div>,
     content3:<div>3 - <strong>Loadable Components</strong> is a library for React that allows you to load components dynamically. It provides an easy way to implement code splitting<br /> One of the powerful features of Loadable Components is <strong>prefetching</strong> it allows us to load the component before hand. To use this prefetching we use preload function which is inbuilt .<br /> Here's a simple example to illustrate this:</div>
    },


  { id: 2, title: "Blog Title 2", content: "This is the full content of Blog 2." },
  // Add more blogs here...
];

const Blog = () => {
const navigate = useNavigate();
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));
  console.log("Blog check ",blog)

  useEffect(() => {
    document.body.classList.add('blog-background');

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('blog-background');
    };
  }, []);

  return (
    <>
       <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
  <button onClick={() => navigate(-1)} className="back-button">
        <BsArrowLeft style={{ marginRight: '8px' }} /> Back 
      </button>
   <div className="blog-container">
      <div className="blog-detail">
        <div className="blog-detail-gradient">
          <h1>{blog.title}</h1>
        </div>
        <div className="blog-content">
             {blog.topic} <br />
            {blog.content1}
          <img src={pic2} alt="Blog visual" className="blog-image" />
          {blog.content2}
          <img src={pic3} alt="Blog visual" className="blog-image" />
          {blog.content3}
          <img src={pic4} alt="Blog visual" className="blog-image" />

          {/* //Bundle analysis: Use tools like Webpack’s bundle-analyzer to check the size of your bundles and identify opportunities for code splitting. */}

        </div>
      </div>
    </div>


    </motion.div>
    

    </>
  );
};

export default Blog;