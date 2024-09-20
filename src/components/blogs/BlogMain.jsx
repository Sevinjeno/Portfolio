import React, { useEffect } from 'react'
import BlogList from './BlogList'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import "./blog.css"
function BlogMain() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/'); // Navigate to the main page (homepage)
  };

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
       <button onClick={handleBack} className="back-button">
          <BsArrowLeft style={{ marginRight: '8px' }} /> Back 
      </button>
        <BlogList />

    </motion.div>
      </>
  )
}

export default BlogMain