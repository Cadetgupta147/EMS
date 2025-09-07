import React from 'react'
import { useAuth } from '../../context/authContext.jsx'
// NOT IN USE ANYMORE SINCE LOGOUT BUTTON MOVED TO SIDEBAR
const Navbar = () => {
    const {user} = useAuth();
    const {logout} = useAuth();
    const handleLogout = () => {
        logout();
    }
  return (
    <div className='flex items-center justify-end bg-gray-800 h-18 text-white p-2'>
        <button onClick={handleLogout} className='bg-gray-900 rounded px-4 py-1 hover:bg-gray-600'>Logout</button>
    </div>
  )
}

export default Navbar