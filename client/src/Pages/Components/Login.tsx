import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

  return (
    <div className="">
        <form action="localhost:3000/login" className="flex flex-col items-center justify-center gap-9  h-[60vh] font-roboto">
            <div className="text-white ">
                <label htmlFor="Username" className="block mb-3 text-3xl">Username</label>
                <input type="text" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500" />
            </div>
            <div className="block text-white">
                <label htmlFor="Password" className="block mb-3 text-3xl">Password</label>
                <input type="password" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"  />
            </div>
            <button onClick={() => navigate('/')} type="submit" className="grid items-center px-24 py-3 text-xl text-center text-white border border-white rounded-xl">Login</button>
        </form>
    </div>
  )
}
export default Login