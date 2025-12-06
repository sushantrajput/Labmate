import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

const Login = () => {

  const [state, setState] = useState('Admin')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
        if (data.success) {
          setAToken(data.token)
          localStorage.setItem('aToken', data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
        if (data.success) {
          setDToken(data.token)
          localStorage.setItem('dToken', data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      console.error(error)
      toast.error("Login failed. Please check your connection.")
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-200 rounded-xl text-[#5E5E5E] text-sm shadow-lg bg-white'>
        <p className='text-2xl font-semibold m-auto'>
          {/* Changed text-primary to text-teal-600 */}
          <span className='text-teal-600'>{state}</span> Login
        </p>
        
        <div className='w-full'>
          <p>Email</p>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            className='border border-[#DADADA] rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500' 
            type="email" 
            required 
          />
        </div>
        
        <div className='w-full'>
          <p>Password</p>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            className='border border-[#DADADA] rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500' 
            type="password" 
            required 
          />
        </div>

        {/* FIXED: Replaced bg-primary with bg-teal-600 and added hover effect */}
        <button className='bg-teal-600 hover:bg-teal-700 text-white w-full py-2 rounded-md text-base transition-all duration-300'>
          Login
        </button>

        {
          state === 'Admin'
            ? <p>Doctor Login? <span onClick={() => setState('Doctor')} className='text-teal-600 underline cursor-pointer hover:text-teal-800'>Click here</span></p>
            : <p>Admin Login? <span onClick={() => setState('Admin')} className='text-teal-600 underline cursor-pointer hover:text-teal-800'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login