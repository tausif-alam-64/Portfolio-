import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { profile } from 'console'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10 ' id='contact'>
       <div className='flex flex-col items-center'>
          <h1 className='heading lg:max-w-[45vw]'>
            Ready to bring <span className='text-purple'>intelligence and interactivity </span>to your digital product? 
          </h1>
          <p className='text-white-200 md:mt-10 my-5 w-[50%] max-sm:w-[90%] text-center'>Let’s collaborate to turn your ideas into powerful full-stack solutions enhanced by AI/ML.
Reach out today, and let’s explore how I can help you build something exceptional.</p>
          <a href="mailto:nextinbytausif@gmail.com">
            <MagicButton 
            title="let's get in touch"
            icon={<FaLocationArrow />} position='right' />
          </a>
       </div>
       <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base md:font-normal font-light'>Copyright 2024 Tausif</p>
       
       <div className='flex items-center md:gap-3 gap-6'>
         {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'><img src={profile.img} alt={profile.img} width={20} height={20}/></div>
         ))}
       </div>
       </div>
    </footer>
  )
}

export default Footer
