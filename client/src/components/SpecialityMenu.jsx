import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SpecialityMenu = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-teal-50 to-white overflow-hidden" id="speciality">
      {/* Blurred Decorations */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-teal-200 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-teal-300 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {/* ✅ FIXED: Removed gradient that made text white. Now using solid Teal. */}
            {/* ✅ CHANGED TEXT: Replaced "World-Class..." with a Quote */}
            <span className="text-primary">
              Expert Care for Every Need
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our board-certified specialists provide exceptional care across {specialityData.length} medical disciplines
          </motion.p>
        </div>

        {/* Specialties Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {specialityData.map((itemData) => (
            <motion.div key={itemData.speciality} variants={item} whileHover={{ y: -5 }}>
              <Link
                to={`/doctors/${itemData.speciality}`}
                className="group flex flex-col items-center p-4 rounded-3xl bg-white shadow-lg hover:shadow-xl border border-teal-50 hover:border-teal-200 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                  <div className="relative w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center p-4 shadow-inner group-hover:bg-white transition-colors duration-300">
                    <img
                      src={itemData.image}
                      alt={itemData.speciality}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <span className="font-medium text-gray-700 group-hover:text-primary text-center transition-colors">
                  {itemData.speciality}
                </span>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-teal-600 flex items-center font-medium">
                  View specialists
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/doctors"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-teal-700 transition-all"
          >
            Explore All Specialties
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialityMenu;