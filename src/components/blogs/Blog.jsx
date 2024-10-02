import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./blog.css"
import { BsArrowLeft } from 'react-icons/bs'; // Import the back arrow icon
import { motion } from "framer-motion";
import pic2 from "../../../public/Blogs/performance/lazyloading.jpg"
import pic3 from "../../../public/Blogs/performance/Routing_lazing.jpg"
import pic4 from "../../../public/Blogs/performance/loadableComponent.jpg"
import performancebackground from "../../../public/Blogs/performance/performance_background.png"
import annony1 from "../../../public/Blogs/performance/anony1.png"
import annony2 from "../../../public/Blogs/performance/anony2.png"
import debounce from "../../../public/Blogs/performance/debounce-approach-illustration.png"
import useReducer from "../../../public/Blogs/performance/usereducer-vs-usestate-for-state-management-1392x938.png"


const blogs = [
  { id: 1,
     title: "Mastering React.js Performance: Tips for Building Faster Applications", 
     img:performancebackground,

     content:<div><h1>Code Splitting :</h1>In a React.js application, performance plays a crucial role in delivering a smooth and engaging user experience. Understanding how to optimize your React components ensures that your app is not only functional but also fast and efficient</div>,

     content1: <div>As your React application grows, it can become large and complex. <br/>To optimize performance, you can use lazy loading to load components only when needed. This reduces the initial load time of your application. <br />In React, this can be done with <strong>React.lazy() and Suspense</strong></div> ,

     content2:<div>Code splitting becomes more effective when done with route-based components.<br /> Let’s split the code for different routes using <strong>React.lazy() and React Router.</strong> </div>,

     content3:<div> <strong>Loadable Components</strong> is a library for React that allows you to load components dynamically. It provides an easy way to implement code splitting<br /> One of the powerful features of Loadable Components is <strong>prefetching</strong> it allows us to load the component before hand. To use this prefetching we use preload function which is inbuilt .<br /> Here's a simple example to illustrate this:</div>,
    
     content4:<div><h1>Memoization</h1><div>Memoization is an optimization technique used to speed up computer programs in exchange for higher use of memory space.</div><div>The speed-up is a result of avoiding repetitive computation of results when the same input parameters are provided, and the cached result is used instead.</div><h2>When to Memoize in React</h2><div>Before using memoization, start by building your components and check for any performance issues using React DevTools. Only consider memoizing if you encounter performance bottlenecks. Once you've applied memoization, compare the performance before and after the optimization. If the improvement is minimal, it's better to discard the memoization to avoid unnecessary complexity or potential bugs</div><h2>What are the ways to Implement Memoization in React</h2><div><strong>React.memo</strong> is a higher-order component that optimizes functional components by preventing unnecessary re-renders. It takes a component and an optional comparison function as arguments. If the comparison function is provided, it decides when the component should update; otherwise, it uses a shallow comparison of props. This should only be used with pure components. The main use case is to memoize a component, so it only re-renders when its props change.</div><div><strong>useMemo</strong> is a built-in React hook that takes a function and a dependencies array as arguments. It memoizes the computed value, only recalculating it when one of the dependencies changes. This is useful for optimizing performance by memoizing expensive calculations, ensuring that pure components only re-render when props change, and maintaining referential equality for object values.</div><div><strong>useCallback</strong> is a React hook similar to useMemo, but instead of returning a memoized value, it returns a memoized function. This is useful for maintaining referential equality, especially when passing functions as props to child components, preventing unnecessary re-renders.</div></div>,

     content5:<div><h1>Avoid anonymous functions</h1><div>Anonymous functions do not have a name, so they aren’t stored in memory like functions assigned to variables (using const, let, or var). This means that every time a functional component re-renders, JavaScript has to create these anonymous functions again.</div><div><img src={annony1} className='blog-image'/></div><div>There is an easy way to solve this. You can change it to a named function and move it outside of the component.</div><img src={annony2} className='blog-image'/></div>,


     content6:<div><h1>Define objects outside of your component</h1><div>If you define an object as an object literal and pass it in as props, this object will have to be recreated on every rerender.</div><div>Instead, define your object outside of the component. Now it is created once on the initial render and not being touched on every rerender.</div></div>,

    content7:<div><h1>Use CDN for static Assets</h1><div>A Content Delivery Network (CDN) enhances website performance by distributing static assets—such as images, CSS, and JavaScript—across a network of geographically diverse servers. This reduces latency by serving content from the nearest server to the user, significantly speeding up load times.</div></div>,

    content8:<div><h1>Debounce & Throttle</h1><div><strong>Debounce</strong> ensures a function is only called after a certain amount of time has passed since the last event. For example, when a user types in a search box, debounce will delay the search action until they’ve stopped typing for a specified period, preventing unnecessary function calls with every keystroke.</div><img src={debounce} alt='Debounce' className='blog-image' /><div><strong>Throttle</strong> limits how often a function can be called over time. It ensures the function runs at regular intervals, regardless of how often the event occurs. For example, during window resizing, throttle will execute the resize function at a set rate, reducing the strain on the browser.</div></div>,

    content9:<div><h1>Optimize Images and Assets</h1><div>To optimize images and assets for better performance in your project, start by compressing images using tools like TinyPNG or ImageOptim to reduce file sizes without compromising quality.</div><div>Use next-gen formats like WebP, which offer better compression than traditional formats. Implement lazy loading for images to delay loading them until needed, reducing initial page load time. </div><div> Minify and bundle your CSS and JavaScript using tools like Webpack to decrease file sizes. Serve static assets through a Content Delivery Network (CDN) to ensure faster delivery from geographically closer servers. Additionally, enable browser caching to store assets locally and use SVGs for scalable graphics. Lastly, leverage responsive images with the srcset attribute and defer or async JavaScript loading to prevent blocking page rendering.</div></div>,

    content10:<div><h1>Split Large State with useReducer</h1><div>By using useReducer, all related state updates are handled in one place, making it easier to manage and understand the overall state logic.</div><div>If a part of the state changes (e.g., adding an item), the reducer only updates the relevant parts of the state, reducing unnecessary re-renders in components that don't depend on the changed state.</div><img src={useReducer} className='blog-image' /><div></div></div>,

    finalWord:<div><h1>Final Word</h1><div>In conclusion, optimizing performance in your React.js applications is not just a technical necessity but a pathway to delivering a seamless user experience. </div><div>By implementing strategies like code splitting, memoization, and effective asset management, you can significantly enhance your application's responsiveness and efficiency. </div><div>Remember, the key to optimization lies in understanding your app's specific needs—so take the time to identify bottlenecks and experiment with different techniques.</div></div>,

    Motto:<div className='Motto'>Keep Believing . Keep Learning . </div>





     
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
      <div className='background__image'>
        <img src={blog.img} alt="Blog background" />
        <div className="overlay-text">
          <h1>{blog.title}</h1>
        </div>
      </div>
   <div className="blog-container">
      <div className="blog-detail">
        <div className="blog-detail-gradient">
          {/* <h1>{blog.title}</h1> */}
        </div>
        <div className="blog-content">
             {blog.content}
            {blog.content1}
          <img src={pic2} alt="Blog visual" className="blog-image" />
          {blog.content2}
          <img src={pic3} alt="Blog visual" className="blog-image" />
          {blog.content3}
          <img src={pic4} alt="Blog visual" className="blog-image" />
          {blog.content4}
          {blog.content5}
          {blog.content6}
          {blog.content7}
          {blog.content8}
          {blog.content9}
          {blog.content10}
          {blog.finalWord}
          {blog.Motto}

          {/* //Bundle analysis: Use tools like Webpack’s bundle-analyzer to check the size of your bundles and identify opportunities for code splitting. */}

        </div>
      </div>
    </div>


    </motion.div>
    

    </>
  );
};

export default Blog;