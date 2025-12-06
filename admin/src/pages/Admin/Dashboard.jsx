import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='m-5'>

      {/* Stats Cards Section */}
      <div className='flex flex-wrap gap-3'>
        
        {/* Doctors Card */}
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:shadow-md hover:border-teal-500 transition-all'>
          <img className='w-14 bg-teal-50 p-2 rounded-full' src={assets.doctor_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-700'>{dashData.doctors}</p>
            <p className='text-gray-500 text-sm'>Doctors</p>
          </div>
        </div>

        {/* Appointments Card */}
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:shadow-md hover:border-teal-500 transition-all'>
          <img className='w-14 bg-teal-50 p-2 rounded-full' src={assets.appointments_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-700'>{dashData.appointments}</p>
            <p className='text-gray-500 text-sm'>Appointments</p>
          </div>
        </div>

        {/* Patients Card */}
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:shadow-md hover:border-teal-500 transition-all'>
          <img className='w-14 bg-teal-50 p-2 rounded-full' src={assets.patients_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-700'>{dashData.patients}</p>
            <p className='text-gray-500 text-sm'>Patients</p>
          </div>
        </div>

      </div>

      {/* Latest Bookings Section */}
      <div className='bg-white border rounded-lg mt-10 shadow-sm'>
        
        {/* Header - Teal Background */}
        <div className='flex items-center gap-2.5 px-4 py-4 rounded-t border-b bg-teal-50'>
          <img src={assets.list_icon} alt="" />
          <p className='font-semibold text-teal-800'>Latest Bookings</p>
        </div>

        <div className='pt-0 divide-y divide-gray-100'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div className='flex items-center px-6 py-4 hover:bg-gray-50 transition-all' key={index}>
              <img className='rounded-full w-10 h-10 object-cover border border-teal-100' src={item.docData.image} alt="" />
              <div className='flex-1 text-sm ml-4'>
                <p className='text-gray-800 font-medium'>{item.docData.name}</p>
                <p className='text-gray-600 '>Booking on {slotDateFormat(item.slotDate)}</p>
              </div>
              
              {item.cancelled 
                ? <p className='text-red-400 text-xs font-medium bg-red-50 px-3 py-1 rounded-full'>Cancelled</p> 
                : item.isCompleted 
                  ? <p className='text-green-500 text-xs font-medium bg-green-50 px-3 py-1 rounded-full'>Completed</p> 
                  : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity' src={assets.cancel_icon} alt="" />
              }
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Dashboard