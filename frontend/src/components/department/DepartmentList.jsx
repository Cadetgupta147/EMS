import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { columns, DepartmentButton } from '../../utils/DepartmentHelper'
import axios from 'axios'

const DepartmentList = () => {
  const [department, setDepartment] = useState([])
  const [filterDepartment, setFilterDepartment] = useState([])
  const onDepartmentDelete = async (id)=>{
    const data = await department.filter(dep => dep._id !== id)
    setDepartment(data)
    // setFilterDepartment(data)
  }
  useEffect(() =>{
    const fectDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/department',{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        if(response.data.success){
          let sno = 1
          const data = await response.data.department.map((dept) => (
            {
              _id: dept._id,
              sno: sno++,
              dep_name: dept.dep_name,
              action: (<DepartmentButton Id={dept._id} onDepartmentDelete={onDepartmentDelete} />)
            }
          ))
          setDepartment(data)
          setFilterDepartment(data)
        }
      } catch (error) {
        if(error.response && !error.response.data.success){
          alert(error.response.data.error)
        }
      }
    }
    fectDepartments();
  },[]);

  const filterDepartments = (e)=>{
     const records = department.filter((dep) => dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase()))
     setFilterDepartment(records) 
  }
  // console.log(department)
  return (
    <div>
      <div className='text-center text-2xl font-bold my-4'>
        <h3>Manage Departments</h3>
      </div>
      <div className='flex items-center justify-between my-4 p-4'>
        <input type="text" placeholder='Search by Department' className='border p-1 bg-white rounded'onChange={filterDepartments}/>
        <Link to='/admin-dashboard/add-department'><button className='p-1 border bg-gray-800 text-white rounded hover:bg-gray-500'>Add Department</button></Link>
      </div>

      <div>
        <DataTable 
        columns={columns} data={filterDepartment} pagination
        />
      </div>
    </div>
  )
}

export default DepartmentList