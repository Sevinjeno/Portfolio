import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import {slideIn} from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper';



const Contact = () => {
  const formref =useRef();
  const linkedinProfileUrl = 'www.linkedin.com/in/sevinjeno-fernando-4815861b6';
  // const linkedinProfileUrl = 'www.Google.com';


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
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
         variants={slideIn('left',"tween",0.2,1)}
         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
            <p className={styles.sectionSubText}>
              Get in touch
            </p>
            <h3 className={styles.sectionHeadText}>
              Contact.
            </h3>
            <form
               ref={formref}
               onSubmit={handleSubmit}
               className='mt-12 flex flex-col gap-8'
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
                      />
                </label>
                {/* <label className='flex flex-col'>
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
                      />
                </label> */}
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
                  className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' 
                   >
                    {loading ? 'Sending...':'Send'}
                </button>
                <div><a href={linkedinProfileUrl}  target="_blank" rel="noopener noreferrer" >Linkedln </a>
              </div>
               </form>
         </motion.div>

         <motion.div
         variants={slideIn('right',"tween",0.2,1)}
         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
             <EarthCanvas />
           
         </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact);