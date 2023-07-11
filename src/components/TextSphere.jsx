import TagCloud from 'TagCloud'
import React, { useEffect, useRef } from 'react'
import "./TextSphere.css"
const TextSphere = () => {

    const TextRef=useRef(null);
    //  let length =TextRef.current.children[0].children.length;

    useEffect(() => {
        TextRef.current="";
        const container = '.tagcloud';
        const texts = [
          'HTML',
          'CSS',
          'C#',
          'JavaScript',
          'React Js',
          'C++',
          'Next JS',
          'NodeJS',
          'Jquery',
          'ES6',
          'GIT',
          'GITHUB',
        ];
    
        const options = {
          radius: 400 ,
          maxSpeed: 'fast',
          initSpeed: 'normal',
          keep: true,
        };
    
        TagCloud(container, texts, options);
      }, []);
  return (
   
    <>
        <div ref={TextRef} className="text-sphere">
            <span  className='tagcloud'>
            </span>
        </div>
    </>
  )
}

export default TextSphere