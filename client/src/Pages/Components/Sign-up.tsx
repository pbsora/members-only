import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()

  return (
    <div className="pb-10">
    <form action="localhost:3000/login" className="flex flex-col items-center justify-center mt-10 gap-9 font-roboto">
      
      <div className="text-white ">
            <label htmlFor="first-name" className="block mb-3 text-3xl">First Name</label>
            <input type="text" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500" name='first-name' />
        </div>
        <div className="text-white ">
            <label htmlFor="last-name" className="block mb-3 text-3xl">Last Name</label>
            <input type="text" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500" name='last-name' />
        </div>
      
        
        <div className="text-white ">
            <label htmlFor="Username" className="block mb-3 text-3xl">Username</label>
            <input type="text" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500" name='username' />
        </div>
        <div className="block text-white">
            <label htmlFor="Password" className="block mb-3 text-3xl">Password</label>
            <input type="password" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500" name='password' />
        </div>
        <div className="block text-white">
            <label htmlFor="confirm-password" className="block mb-3 text-3xl"> Confirm Password</label>
            <input type="password" className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500" name='confirm-password' />
        </div>
        <button onClick={() => navigate('/')} type="submit" className="grid items-center px-24 py-3 text-xl text-center text-white border border-white rounded-xl">Login</button>
    </form>
</div>
  )
}
export default SignUp