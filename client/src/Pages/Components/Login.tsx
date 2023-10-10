import { useState, ChangeEvent } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

interface User {
    username: string,
    password: string
}

const Login = () => {
    
    const [user, setUser] = useState<User>({
        username: "",
        password: "",
    })
    
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const login = async() => {
       const logInfo = await axios({
            method: 'POST',
            data: {
                username: user.username,
                password: user.password
            },
            withCredentials: true,
            url: "http://localhost:3000/log-in"
        })

        if(logInfo.data !== false) navigate("/")
       
    }

   

  return (
    <div className="flex flex-col items-center justify-center gap-9  h-[60vh] font-roboto">
      
            <div className="text-white ">
                <label htmlFor="Username" className="block mb-3 text-3xl">Username</label>
                <input type="text" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500" onChange={handleChange} value={user.username} name='username' />
            </div>
            <div className="block text-white">
                <label htmlFor="Password" className="block mb-3 text-3xl">Password</label>
                <input type="password" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"  onChange={handleChange} value={user.password} name='password' />
            </div>
            <button /*  onClick={() => navigate('/')} */ onClick={login} type="submit" className="grid items-center px-24 py-3 text-xl text-center text-white border border-white rounded-xl" >Login</button>
    
    </div>
  )
}
export default Login