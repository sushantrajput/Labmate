import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiLock, FiUser, FiArrowRight, FiX } from 'react-icons/fi'
import { assets } from '../assets/assets'

const Login = () => {
  // 1. Consume showLogin and setShowLogin from Context
  const { backendUrl, setToken, token, showLogin, setShowLogin } = useContext(AppContext)
  
  const [state, setState] = useState("signup")
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const endpoint = state === "signup" ? "/register" : "/login"
      const { data } = await axios.post(`${backendUrl}/api/user${endpoint}`, form)
      if (data.success) {
        localStorage.setItem("token", data.token)
        setToken(data.token)
        toast.success(`Account ${state === "signup" ? "created" : "logged in"} successfully`)
        setShowLogin(false) // 2. Close modal on success
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || `Error during ${state === "signup" ? "sign up" : "login"}`)
    } finally {
      setIsLoading(false)
    }
  }

  // 3. Prevent background scrolling when modal is open
  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [showLogin])

  // 4. Don't render anything if showLogin is false
  if (!showLogin) return null;

  return (
    // 5. Modal Overlay Container (Fixed position, z-index, semi-transparent background)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 fade-in">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row relative"
      >
        {/* 6. Close Button */}
        <button 
          onClick={() => setShowLogin(false)} 
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-gray-100 text-gray-500 hover:text-red-500 transition-colors shadow-sm"
        >
          <FiX size={24} />
        </button>

        {/* Left Side - Image/Branding Section */}
        <div className="md:w-1/2 bg-primary relative overflow-hidden flex flex-col items-center justify-center text-white p-10">
           <div className="absolute inset-0 opacity-20 mix-blend-multiply">
              <img src={assets.header_img} className="w-full h-full object-cover" alt="Background" />
           </div>
           
           <div className="relative z-10 text-center">
              <div className="bg-white/20 p-4 rounded-full inline-block mb-6 backdrop-blur-sm">
                <img src={assets.logo} alt="LabMate Logo" className="w-20 h-auto" />
              </div>
              <h2 className="text-3xl font-bold mb-3 font-outfit">Welcome to LabMate</h2>
              <p className="text-teal-100 text-base max-w-xs mx-auto">
                {state === "signup" 
                  ? "Create an account to book appointments and manage your health." 
                  : "Sign in to access your appointments and medical records."}
              </p>
           </div>

           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-600 rounded-full opacity-50 blur-3xl"></div>
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500 rounded-full opacity-50 blur-3xl"></div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center bg-white">
          
          <motion.div
            key={state}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm mx-auto"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {state === "signup" ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-gray-500 text-sm">
                Please enter your details to {state === "signup" ? "sign up" : "log in"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {state === "signup" && (
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500/20 focus:border-primary transition-all outline-none"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="group">
                <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500/20 focus:border-primary transition-all outline-none"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500/20 focus:border-primary transition-all outline-none"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2.5 px-4 bg-primary text-white font-medium rounded-lg shadow-lg shadow-teal-700/20 transform transition-all hover:shadow-teal-700/40 hover:-translate-y-0.5 active:translate-y-0 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-teal-700"
                }`}
              >
                {isLoading ? (
                   <div className="flex items-center justify-center gap-2">
                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     <span>Processing...</span>
                   </div>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {state === "signup" ? "Create Account" : "Sign In"} 
                    <FiArrowRight />
                  </span>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                {state === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setState(state === "signup" ? "login" : "signup")}
                  className="font-semibold text-primary hover:text-teal-700 hover:underline transition-colors"
                >
                  {state === "signup" ? "Login here" : "Sign up"}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Login