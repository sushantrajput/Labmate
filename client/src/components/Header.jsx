import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div className='relative flex flex-col lg:flex-row items-center bg-gradient-to-br from-teal-900 to-teal-700 rounded-2xl px-6 md:px-12 lg:px-16 overflow-hidden shadow-2xl min-h-[500px]'>

      {/* Background Decorative Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-teal-800 rounded-full filter blur-[100px] opacity-20'></div>
        <div className='absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-teal-600 rounded-full filter blur-[100px] opacity-20'></div>
        <svg className='absolute top-1/4 left-1/4 opacity-5 w-48 h-48 text-teal-300' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
          <path d='M12 3C16 3 19 6 19 10C19 14 16 17 12 17C8 17 5 14 5 10C5 6 8 3 12 3Z' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 21C8 21 5 18 5 14C5 10 8 7 12 7C16 7 19 10 19 14C19 18 16 21 12 21Z' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </div>

      {/* Left Side: Text Content */}
      <div className='lg:w-1/2 flex flex-col items-start justify-center gap-6 py-12 lg:py-20 z-10 relative'>
        
        {/* Heading */}
        <div className='relative'>
          <div className='absolute -left-6 -top-4 w-4 h-4 bg-teal-400 rounded-full animate-pulse hidden md:block'></div>
          <h1 className='text-4xl md:text-5xl lg:text-[3.5rem] text-white font-bold leading-tight tracking-tight text-left'>
            Compassionate Care <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400'>
              For A Healthier You
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className='text-teal-100/90 text-lg max-w-lg leading-relaxed text-left'>
          We are dedicated to providing top-tier medical assistance with trusted specialists, ensuring your well-being with 
          <span className='font-medium text-white'> 24/7 availability</span> and 
          <span className='font-medium text-white'> personalized attention</span>.
        </p>

        {/* Button */}
        <div className='flex flex-col sm:flex-row gap-5 mt-2'>
          <a
            href="#speciality"
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
            className='group relative overflow-hidden bg-primary hover:bg-teal-800 rounded-full flex items-center justify-center gap-3 px-8 py-4 text-white font-medium text-base transition-all duration-500 hover:shadow-2xl'
          >
            <span className='relative z-10 flex items-center gap-2'>
              Schedule Consultation
              <svg className={`w-4 h-4 transition-transform duration-300 ${hoverState ? 'translate-x-1' : ''}`} viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3' />
              </svg>
            </span>
            <span className='absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></span>
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className='lg:w-1/2 flex justify-center lg:justify-end items-end relative z-10 mt-10 lg:mt-0'>
        <img 
          src="https://jankalyan.org/VK/Book_online_appointment.png" 
          alt="Book Online Appointment" 
          className="w-full max-w-md md:max-w-lg h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </div>

    </div>
  );
};

export default Header;