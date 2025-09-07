import React, {useState} from 'react'
import axios from 'axios'
import { useAuth } from '../context/authContext.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {login} = useAuth();
    const navigate = useNavigate(); 

    const handleSubmit = async(e)=>{
        try {
            e.preventDefault()
            const response = await axios.post(
                'http://localhost:5000/api/auth/login',
                {email, password}
            ); 
            if(response.data.success){
                console.log('Login Successful')
                login(response.data.user)
                localStorage.setItem('token', response.data.token)
                if(response.data.user.role ==='admin'){
                    navigate('/admin-dashboard')
                }
                else{
                    navigate('/employee-dashboard')
                }
            }
        } catch (error) {
            if(error.response && !error.response.data.success){
                setError(error.response.data.error)
            }
            else{
                setError("Something went wrong")
            }
        }
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-emerald-500 via-green-400 to-lime-300 space-y-6'>
        <h2 className='text-white text-3xl font-bold'>Employee Management System</h2>
        
        <div className='border shadow p-6 w-80 bg-white'>
            <h2 className='text-2xl font-bold mb-4'>Login Page</h2>
            {error && <p className='text-red-500'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input 
                    type="email" 
                    className='w-full px-3 py-2 border' 
                    placeholder='Enter Email' 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input 
                    type="password" 
                    className='w-full px-3 py-2 border' 
                    placeholder='Enter Password' 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div className='mb-4 flex justify-between items-center text-sm'>
                    <label>
                        <input type="checkbox"/>
                        <span>Remember me</span>
                    </label>
                    <a href="#">Forgot Password</a>
                </div>
                <div className='mb-4'>
                    <button 
                    type='submit'
                    className='w-full bg-emerald-500 text-white px-3 py-2'
                    >Login</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Login