import React, {children, createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios'

const UserContext = createContext();
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
    
    useEffect(() => {
        const verifyUSer = async()=> {
            try {
                const token = localStorage.getItem('token')
                if(token){
                    const response = await axios.get('http://localhost:5000/api/auth/verify',{
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    if(response.data.success){
                        setUser(response.data.user)
                    }
                    // console.log(response)
                }
                else{
                    setUser(null)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
                if(error.response && !error.response.data.success){
                    setUser(null)
                }
            }
            finally{
                setLoading(false)
            }
        }
        verifyUSer()
    }, [])

    const login = (user) =>  {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
    }
  return (
        <UserContext.Provider value={{user, login, logout,loading}}>
            {children}
        </UserContext.Provider>
  )
}
export const useAuth = () => useContext(UserContext)
export default AuthContext