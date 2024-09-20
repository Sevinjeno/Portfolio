import React, { useEffect } from 'react'
import BlogList from './BlogList'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
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
       <button onClick={handleBack} className="back-button">
          <BsArrowLeft style={{ marginRight: '8px' }} /> Back 
      </button>
        <BlogList />
      </>
  )
}

export default BlogMain