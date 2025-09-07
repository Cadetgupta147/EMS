import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaUsers, FaTachometerAlt, FaBuilding, FaCalendarAlt, FaMoneyBillWave, FaCogs  } from "react-icons/fa";
import { useAuth } from '../../context/authContext.jsx'

const AdminSideBar = () => {
  const {user} = useAuth();
  const {logout} = useAuth();
  const handleLogout = () => {
      logout();
  }
  return (
    <div className='bg-gray-700 text-white h-screen w-64 fixed top-0 bottom-0 left-0 space-y-2 flex flex-col'>
      <div className='bg-gray-700 text-white h-18 flex justify-start items-center text-2xl font-bold p-4'>
        <h2>Welcome {user.username}</h2>
      </div>
      <div className='px-4'>
        <NavLink to="/admin-dashboard"
        className={ ({isActive}) => `${isActive ? " bg-gray-500": " " } flex items-center space-x-2 block py-2 px-3 rounded`}
        end>
        <FaTachometerAlt />
        <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin-dashboard/employees"
        className={({isActive}) => `${isActive ? " bg-gray-500": " " } flex items-center space-x-2 block py-2 px-3 rounded`}>
        <FaUsers />
        <span>Employees</span>
        </NavLink>
        <NavLink to="/admin-dashboard/departments"
        className={({isActive}) => `${isActive ? " bg-gray-500": " " } flex items-center space-x-2 block py-2 px-3 rounded`}>
        <FaBuilding />
        <span>Departments</span>
        </NavLink>
        <NavLink to="/leaves"
        className={({isActive}) => `${isActive ? " bg-gray-500": " " } flex items-center space-x-2 block py-2 px-3 rounded`}>
        <FaCalendarAlt />
        <span>Leaves</span>
        </NavLink>
        <NavLink to="/salary"
        className={({isActive}) => `${isActive ? " bg-gray-500": " " } flex items-center space-x-2 block py-2 px-3 rounded`}>
        <FaMoneyBillWave />
        <span>Salary</span>
        </NavLink>
        <NavLink to="/settings"
        className={({isActive}) => `${isActive ? " bg-gray-500": " " } flex items-center space-x-2 block py-2 px-3 rounded`}>
        <FaCogs />
        <span>Settings</span>
        </NavLink>
      </div>



      {/* Removing the logout button from navbar and placing it here */}
      
      <div className='p-4 mt-auto flex justify-center'>
          <button onClick={handleLogout} className='w-full bg-gray-800 rounded px-4 py-1 hover:bg-gray-500'>Logout</button>
      </div>
    </div>
  )
}

export default AdminSideBar