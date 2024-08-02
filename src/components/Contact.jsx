import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import {styles} from '../styles'
import {slideIn} from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper';
import { Element } from 'react-scroll';
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import call from "../../src/assets/call.png"
import whatsapp from "../../src/assets/whataspp.png"



const Contact = () => {
  const formref =useRef();

  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
  
    const {name,value}=e.target;
    setForm({...form,[name]:value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
        
    //template_vmq3avs
    // service_bvxcwwi
    // lTJHqUHSSci1hlEGk

    emailjs.send(
      'service_bvxcwwi',
      'template_vmq3avs',
      {
        from_name:form.name,
        to_name:'SevinJeno',
        from_email:form.email,
        to_email:'7jenodev@gmail.com',
        message:form.message,
      },
      'lTJHqUHSSci1hlEGk'
    ).then(()=>{
      setLoading(false);
      alert("Thanks for getting in touch. I'll contact you shortly")
    })


  }
  return (
  <>
    <p id="__getintouch" className={styles.sectionSubText} style={{}}>
              Get in touch
            </p>
            {/* <h3  style={{textAlign:"center"}}>
              Contact.
            </h3> */}

            <div className='ContactMainPage'>

                   {/* <div className='contact1 flex-item'>


                      <Element id="cont" className=''>
                          <motion.div
                            variants={slideIn('left',"tween",0.2,1)}
                            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                                {/* <p className={styles.sectionSubText}>
                                  Get in touch
                                </p>
                                <h3 className={styles.sectionHeadText}>
                                  Contact.
                                </h3> */}
                                {/* <form
                                  ref={formref}
                                  onSubmit={handleSubmit}
                                  className='mt-1 flex flex-col gap-5'
                                  >
                                    <label className='flex flex-col'>
                                      <span className='text-white font-medium mb-4'>
                                        Your Name
                                      </span>
                                      <input
                                        type='text'
                                        name='name'
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What's your name?"
                                        className='bg-tertiary py-4 px-6
                                          placeholder:text-secondary
                                          text-white rounded-lg outlined-none
                                          border-none font-medium'
                                          required
                                          />
                                    </label>
                                    <label className='flex flex-col'>
                                      <span className='text-white font-medium mb-4'>
                                        Your Email
                                      </span>
                                      <input
                                        type='email'
                                        name='email'
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What's your email?"
                                        className='bg-tertiary py-4 px-6
                                          placeholder:text-secondary
                                          text-white rounded-lg outlined-none
                                          border-none font-medium'
                                          required
                                          />
                                    </label>
                                    <label className='flex flex-col'>
                                    <span className='text-white font-medium mb-4'>
                                      Your Message
                                    </span>
                                      <textarea
                                      rows="7"
                                      name="message"
                                      value={form.message}
                                      onChange={handleChange}
                                      placeholder='Message'
                                      className='bg-tertiary py-4 px-6 placeholder:text-secondary
                                      text-white rounded-lg outline-none
                                      border-none font-medium'
                                      />
                                    </label>
                                    <button
                                      type='submit'
                                      className='bg-tertiary py-3 px-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' 
                                      >
                                        {loading ? 'Sending...':'Send'}
                                    </button>
                                    <div>
                                  </div>
                                  </form>
                            </motion.div>

                        </Element> */}


                   {/* </div> */} 
                   {/* <div  className="flex-item" style={{height:"20vh",width:"2px",border:"2px solid white"}}>

                   </div> */}

                   <div className='cont'> 
                        <h1 className='Contact__head'>You can <span style={{color:"Blue"}}>Connect</span> With me Directly on </h1>
                        <p className='contact_footer contact2' style={{marginTop:"2%",marginBottom:"15%"}}>
                            <span id="gmail"><a href="mailto:7jenodev@gmail.com" target='_blank'><IoIosMail size="50px" style={{display:"inline-block",cursor:"pointer"}}/></a></span>
                            <span id="linkedin">
                            <a href="https://www.linkedin.com/in/sevinjenofernando/" target="_blank"><FaLinkedin size="40px" style={{display:"inline-block",marginLeft:"20px",cursor:"pointer"}} /></a>
                            <a href="tel:+918999835317" target='_blank'> <span style={{color:"Blue",display:"inline-block"}}> <img style={{display:"inline-block",marginLeft:"20px"}} src={call} alt='call'/>  </span></a>
                            <a href="https://wa.me/+918999835317" target='_blank'><span style={{fontSize:"20px",color:"Blue",fontWeight:"700",display:"inline-block"}}> <img style={{display:"inline-block",marginLeft:"20px"}} src={whatsapp} alt='call'/> </span></a>

                            </span>&nbsp;
                        </p>


                       
                   </div>


            </div>

  
  </>


  )
}

export default Contact;