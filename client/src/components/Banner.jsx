import React, { useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
  };

  return (
    <div ref={ref} className="relative overflow-hidden bg-gradient-to-br from-teal-900 to-teal-700 rounded-3xl px-6 sm:px-10 md:px-14 lg:px-20 my-16 mx-4 md:mx-10 shadow-2xl">
      
      {/* Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-800 rounded-full blur-[120px] opacity-20" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-600 rounded-full blur-[120px] opacity-20" />
      
      <svg className="absolute top-1/2 left-1/4 opacity-10 w-60 h-60 text-teal-200 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 3v18M9 6l3-3 3 3M9 18l3 3 3-3M12 6a3 3 0 0 0-3 3v3a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <motion.div className="relative z-10 flex flex-col md:flex-row items-center py-10 md:py-0" initial="hidden" animate={controls} variants={container}>
        <div className="flex-1 py-10 md:py-12 lg:py-14">
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-tight tracking-tight">
            Expert Medical Care <br />
            {/* Updated Highlight Text */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">Simplified For You</span>
          </motion.h1>
          
          {/* Updated Description Text */}
          <motion.p variants={item} className="text-teal-100/90 mt-4 mb-6 text-lg md:text-xl max-w-lg leading-relaxed">
            Access a wide network of trusted healthcare professionals and schedule appointments effortlessly for personalized medical attention.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
            <motion.button whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.98 }}
              onClick={() => { navigate("/login"); window.scrollTo(0, 0); }}
              className="bg-white hover:bg-teal-50 text-primary font-semibold px-7 py-3 rounded-full shadow-lg flex items-center gap-2.5">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <motion.div className="hidden md:block md:w-1/2 lg:w-[420px] relative min-h-[320px]" variants={item}>
          <img 
            src="https://ssshealth-connect.s3.ap-south-1.amazonaws.com/uploads/categories/20230926210929357664_proff.jpg" 
            alt="Doctor consultation" 
            loading="lazy" 
            className="w-full h-auto object-contain translate-y-6 rounded-tl-[100px] rounded-br-2xl border border-teal-800/30 shadow-2xl" 
          />

          {/* "Avg. Wait Time" Card */}
          <motion.div className="absolute top-10 right-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 w-52 z-20 border border-gray-100/20"
            initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <div className="flex items-start gap-3">
              <div className="bg-teal-100/80 p-2.5 rounded-lg">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase">Avg. Wait Time</p>
                <p className="font-bold text-teal-900 text-xl">12 mins</p>
                <p className="text-gray-500 text-xs mt-1">99% satisfaction</p>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;