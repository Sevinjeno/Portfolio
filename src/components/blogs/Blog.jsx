import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./blog.css"
import { BsArrowLeft } from 'react-icons/bs'; // Import the back arrow icon

const blogs = [
  { id: 1, title: "Performance", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut veniam veritatis ipsam vitae officia reprehenderit sunt ex repellendus qui nostrum eius neque maxime molestiae ullam cum, mollitia aliquid! Voluptatibus voluptatum molestiae neque sint accusamus totam facilis necessitatibus dolores ratione, perspiciatis voluptas sunt vel, nisi doloremque, laborum ea. Laudantium, minus maxime." },
  { id: 2, title: "Blog Title 2", content: "This is the full content of Blog 2." },
  // Add more blogs here...
];

const Blog = () => {
const navigate = useNavigate();
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  useEffect(() => {
    document.body.classList.add('blog-background');

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('blog-background');
    };
  }, []);

  return (
    <>
      <button onClick={() => navigate(-1)} className="back-button">
        <BsArrowLeft style={{ marginRight: '8px' }} /> Back 
      </button>
   <div className="blog-container">
      <div className="blog-detail">
        <div className="blog-detail-gradient">
          <h1>{blog.title}</h1>
        </div>
        <div className="blog-content">
          <p>{blog.content}</p>
          <img src={blog.image} alt="Blog visual" className="blog-image" />
          <p>{blog.content}</p>
          <img src={blog.image} alt="Blog visual" className="blog-image" />
          <p>{blog.content}</p>
        </div>
      </div>
    </div>

    </>
  );
};

export default Blog;