import React from 'react'
import Carousel from './Carousel'
import sundirect from '../../../public/Projects/Sundirect/1.png'
import sundirect2 from '../../../public/Projects/Sundirect/2.png'
import sun1 from "../../../public/Projects/Sunnxt/1.png"
import sun2 from "../../../public/Projects/Sunnxt/2.png"
import sun4 from "../../../public/Projects/Sunnxt/4.png"
import y1 from "../../../public/Projects/Youtbe/1.png"
import y2 from "../../../public/Projects/Youtbe/2.png"
import y3 from "../../../public/Projects/Youtbe/3.png"

import web1 from "../../../public/Projects/web/1.png"
import web2 from "../../../public/Projects/web/2.png"

import youtube_ from "/src/assets/youtube.mp4"
import website_ from "/src/assets/web.mp4"


import { ChevronsRight } from 'react-feather'

const Projects = () => {
  const Slides =[
    sundirect,
    sundirect2
  ]

  const Slides2=[
    sun4, sun1,sun2,
  ]

  const Slides3=[
    y1,y2,y3
  ]

  const Slides4=[
    web1,web2
  ]

  return (
    <> 
        <h2 className="text-center __head">
               Projects
          </h2>

         {/* sunnxt */}
        <div className="__Projects">

            <div className="__project_thumb">
            <Carousel   >
                  {Slides2.map((e,i)=>{
                          return <img src={e} key={i+10} alt={`Slide ${i + 10}`} />
                        })}                   
            </Carousel>
               
            </div>
            <div className="__projectInfo">
                 <h2>Sunnxt</h2>
                 <p>Optimized the website for search engines (SEO) to improve its visibility and organic traffic. Conducted thorough testing to identify and fix any bugs or issues, ensuring a smooth user experience .Provided documentation and training to the client for managing the website independently.</p>
                <p>To view Project <ChevronsRight size={20} style={{display:'inline-block'}}/><a href='https://www.sunnxt.com/' target='_blank'>Sunnxt.com</a></p>
                <p><span>Built With </span>ReactJs CSS3 Javascript</p>
            </div>
        </div>


        {/* Tvguide */}

     

        <div className="__Projects">
            <div className="__project_thumb">
            <Carousel  >
                  {[
                              ...Slides.map((e,i)=>(
                                <img src={e} key={i+20} alt={`Slide ${i + 20}`}/>
                              )),
                        
                        ]}                   
            </Carousel>
               
            </div>
            <div className="__projectInfo">
                 <h2>TvGuide | Sundirect Go</h2>
                 <p>I was responsible for developing from Scratch to a perfectly and effecient working Tvguide for Sundirect Go.Implemented a user-friendly interface with smooth navigation, allowing customers to easily browse and Scroll loading has been implemented since it will prevent slowdown. </p>
                 <p>To view Project <ChevronsRight size={20} style={{display:'inline-block'}}/><a href='https://www.sundirectgo.in/live-tv' target='_blank'>Sunnxt.com</a></p>
                 <p><span>Built With </span>ReactJs CSS3 Javascript</p>
            </div>
        </div>

        {/* youtube */}

        <div className="__Projects" >
     
            <div className="__project_thumb" style={{width:"70%"}}>
         
            <Carousel>
                   {[
                        <video key={"Youtube"} src={youtube_} autoPlay muted loop />,
                        
                              ...Slides3.map((e,i)=>(
                                <img src={e} key={i+30} alt={`Slide ${i + 30}`} />
                              )),
                        
                        ]}             
            </Carousel>
               
            </div>
            <div className="__projectInfo">
                  <h2>Custom youtube</h2>
                 <p>Deployed Custom Youtube . Developed the front-end using modern web technologies such as HTML5, CSS3, and JavaScript, ensuring a responsive and intuitive user experience across devices.Developed a robust search functionality, allowing users to easily discover videos based on keywords, categories, and trending topics. </p>
                 <p><span>Built With </span>ReactJs CSS3 Javascript</p>
            </div>
        </div>
   

        {/* Interior Design Website  */}

        <div className="__Projects" >
     
     <div className="__project_thumb" style={{width:"66%"}}>
  
     <Carousel>
            {[

                 <video key={"Website"} src={website_} autoPlay muted loop />,
              ...Slides4.map((e,i)=>(
                                <img src={e} key={i+30} alt={`Slide ${i + 30}`} />
                              )),
                 
                 ]}             
     </Carousel>
        
     </div>
     <div className="__projectInfo">
           <h2>Interior Design Website</h2>
          <p>Managed the project from start to finish, ensuring seamless execution and adherence to the timeline and budget of the Client.Developed a cohesive design concept that captured the vision and preferences. Implemented a carefully selected color scheme and theme that brought the design concept to life</p>
          <p>To view Project <ChevronsRight size={20} style={{display:'inline-block'}}/><a href='https://siddhivinayakenterprises.co.in/' target='_blank'>Interior Design</a></p>
          <p><span>Built With </span>ReactJs CSS3 Javascript</p>
     </div>
 </div>


              
        

    </>
  )
}

export default Projects