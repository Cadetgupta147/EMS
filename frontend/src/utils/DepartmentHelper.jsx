import axios from "axios"
import { useNavigate } from "react-router-dom"

export const columns = [
    {
        name: 'S. No.',
        selector: (row) => row.sno,
        sortable: true
    },
    {
        name: 'Department Name',
        selector: (row) => row.dep_name,
        sortable: true
    },
    {
        name: 'Action',
        selector: (row) => row.action
    },
    
]

export const DepartmentButton = ({Id, onDepartmentDelete})=>{
    const navigate = useNavigate()

    const handleDelete = async (id)=>{

        const confirm = window.confirm("Do you want to delete?")
        if (confirm) {
            try {
                const response = await axios.delete(`http://localhost:5000/api/department/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
                });
                
                if (response.data.success) {
                onDepartmentDelete(id);
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
                }
            }
        }
    }

    return(
        <div>
            <button className='p-1 border bg-gray-800 text-white rounded hover:bg-gray-500 mx-1'
            onClick={()=> navigate(`/admin-dashboard/departments/${Id}`)}
            >Edit</button>
            <button className='p-1 border bg-red-800 text-white rounded hover:bg-red-500 mx-1'
            onClick={() => handleDelete(Id)}
            >Delete</button>
        </div>
    )
}