import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext, ILogged } from "../../Context/UserContext";

import axios from "axios";

interface User {
  username: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const { setLogged } = useContext(UserContext) as ILogged;

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const logInfo = await axios({
      method: "POST",
      data: {
        username: user.username,
        password: user.password,
      },
      withCredentials: true,
      url: "log-in",
    });
    if (logInfo.data.message) {
      setError(true);
      setErrorMsg(logInfo.data.message);
      return;
    } else {
      setLogged(user.username[0].toUpperCase() + user.username.slice(1));
      navigate("/");
    }
    console.log(logInfo);
  };

  return (
    <form action="#" onSubmit={login}>
      <div className="flex flex-col items-center justify-center gap-9  h-[60vh] font-roboto">
        <div className="text-white ">
          <label htmlFor="Username" className="block mb-3 text-3xl">
            Username
          </label>
          <input
            type="text"
            className="px-10 py-3 text-2xl border border-white rounded-lg outline-none bg-zinc-700 focus:border-blue-500"
            onChange={handleChange}
            value={user.username}
            name="username"
            required
          />
        </div>
        <div className="block text-white">
          <label htmlFor="Password" className="block mb-3 text-3xl">
            Password
          </label>
          <input
            type="password"
            className="px-10 py-3 text-2xl border border-white rounded-lg outline-none bg-zinc-700 focus:border-blue-500"
            onChange={handleChange}
            value={user.password}
            name="password"
            required
          />
        </div>
        {error && <p className="text-red-600">{errorMsg}</p>}
        <button
          type="submit"
          className="grid items-center px-24 py-3 text-xl text-center text-white border border-white rounded-xl"
        >
          Login
        </button>
      </div>
    </form>
  );
};
export default Login;
