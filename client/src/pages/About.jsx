import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-white min-h-screen">
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">About LabMate</h1>
          <p className="text-xl text-teal-100">Your trusted partner in healthcare management</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <img 
              src={assets.about_image} 
              alt="About LabMate"
              className="w-full rounded-xl shadow-lg border-4 border-white"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-md border border-teal-100">
              <h2 className="text-2xl font-bold text-primary mb-6">Welcome to LabMate</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>Welcome to LabMate, your trusted partner in managing your healthcare needs conveniently and efficiently. At LabMate, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                
                <p>LabMate is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, LabMate is here to support you every step of the way.</p>
                
                <div>
                  <h3 className="text-xl font-semibold text-teal-600 mb-3">Our Vision</h3>
                  <p>Our vision at LabMate is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-900 mb-2">Why Choose Us</h2>
          <p className="text-lg text-gray-500">Discover what makes LabMate different</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8 text-center md:text-left">
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Efficiency</h3>
              <p className="text-gray-600">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8 text-center md:text-left">
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Convenience</h3>
              <p className="text-gray-600">Access to a network of trusted healthcare professionals in your area.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8 text-center md:text-left">
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Personalization</h3>
              <p className="text-gray-600">Tailored recommendations and reminders to help you stay on top of your health.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About