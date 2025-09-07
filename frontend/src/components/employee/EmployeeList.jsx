import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import DataTable from 'react-data-table-component'

const EmployeeList = () => {
  return (
    <div>
      <div className='text-center text-2xl font-bold my-4'>
        <h3>Manage Employees</h3>
      </div>
      <div className='flex items-center justify-between my-4 p-4'>
        <input type="text" placeholder='Search by Employee ID' className='border p-1 bg-white rounded'/>
        <Link to='/admin-dashboard/add-employee'><button className='p-1 border bg-gray-800 text-white rounded hover:bg-gray-500'>Add New Employee</button></Link>
      </div>
    </div>
  )
}

export default EmployeeList