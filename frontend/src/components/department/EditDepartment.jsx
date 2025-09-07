import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditDepartment = () => {
    const {id} = useParams()
    const [department,setDepartment] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        const fectDepartments = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/department/${id}`,{
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                if(response.data.success){
                    setDepartment(response.data.department)
                }
            } catch (error) {
                if(error.response && !error.response.data.success){
                    alert(error.response.data.error)
                }
            }
        }
        fectDepartments();
    },[]);
    
    const handleChange = (e)=>{
        const{name, value} = e.target;
        setDepartment({
            ...department,
            [name]: value
        })

    }

    const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log(department);
    // Code to send the department data to the backend server
    try {
         const response = await axios.put(`http://localhost:5000/api/department/${id}`, department,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
         })
         if(response.data.success){
            navigate('/admin-dashboard/departments')
         }
    } catch (error) {
        if(error.response && !error.response.data.success){
            alert(error.response.data.message);   
        }
    }
        
}
  return (
    <div>
       <div className='max-w-3xl mx-auto mt-10 bg-white p-6 rounded-md shadow-md w-96'>
                <h3 className='text-2xl font-bold mb-6'>Edit Department</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="Department Name" className='block'>Department Name</label>
                        <input type="text" onChange={handleChange} name="dep_name" placeholder='Department Name' value={department.dep_name} className='border mt-1 p-2 rounded w-full'/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="Description" className='block'>Description</label>
                        <textarea name="description" onChange={handleChange} value={department.description} placeholder='Description' className='border mt-1 p-2 rounded w-full'rows='4'/>
                    </div>
                    <div className='mb-4'>
                        <button className='border bg-gray-800 text-white rounded hover:bg-gray-500 p-1 mt-4 w-full'>Edit Department</button>
                    </div>
                </form>
       </div>
    </div>
  )
}

export default EditDepartment