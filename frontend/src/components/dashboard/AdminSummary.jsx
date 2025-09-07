import React from 'react'
import SummaryCard from './SummaryCard.jsx'
import { FaUsers, FaBuilding, FaMoneyBillWave, FaHourglassHalf, FaFileAlt, FaTimesCircle, FaCheckCircle  } from "react-icons/fa";

const AdminSummary = () => {
  return (
    <div className='p-6'>
        <h3 className='text-2xl font-bold p-4 mb-2'>Dashboard Overview</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <SummaryCard icon={<FaUsers />} text="Total Employees" number={100} color='bg-emerald-400'/>
            <SummaryCard icon={<FaBuilding />} text="Total Departments" number={5} color='bg-yellow-400'/>
            <SummaryCard icon={<FaMoneyBillWave />} text="Monthly Pay" number={5000000} color='bg-red-400'/>
        </div>

        <div className='mt-12'>
            <h4 className='text-xl font-semibold p-4 mb-2 text-center'>Leave Details</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <SummaryCard icon={<FaFileAlt />} text="Total Leaves" number={200} color='bg-blue-400'/>
                <SummaryCard icon={<FaHourglassHalf />} text="Pending Leaves" number={20} color='bg-orange-400'/>
                <SummaryCard icon={<FaCheckCircle />} text="Approved Leaves" number={180} color='bg-emerald-400'/>
                <SummaryCard icon={<FaTimesCircle />} text="Rejected Leaves" number={10} color='bg-red-400'/>
            </div>
        </div>
    </div>
  )
}

export default AdminSummary