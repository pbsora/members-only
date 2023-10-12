import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

import axios from "axios";

interface User {
  username: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

const SignUp = () => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regInfo = await axios({
      method: "POST",
      data: {
        username: user.username,
        password: user.password,
        confirmPassword: user.confirmPassword,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      withCredentials: true,
      url: "http://localhost:3000/register",
    });

    if (regInfo.data.errors && regInfo.data.errors.length !== 0) {
      setErrorMsg(regInfo.data.errors[0].msg);
      setError(true);
      return;
    } else if (regInfo.data.message) {
      setErrorMsg(regInfo.data.message);
      setError(true);
      return;
    }
    navigate("/");
  };

  return (
    <form
      action="#"
      className="grid h-auto gap-5 mt-10 mb-10 place-content-center font-roboto"
      onSubmit={registerUser}
    >
      <div className="text-white ">
        <label htmlFor="firstName" className="block mb-3 text-3xl">
          First Name
        </label>
        <input
          type="text"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
          required
          minLength={2}
        />
      </div>
      <div className="text-white ">
        <label htmlFor="lastName" className="block mb-3 text-3xl">
          Last Name
        </label>
        <input
          type="text"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
          required
          minLength={2}
        />
      </div>

      <div className="text-white ">
        <label htmlFor="Username" className="block mb-3 text-3xl">
          Username
        </label>
        <input
          type="text"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="username"
          onChange={handleChange}
          value={user.username}
          required
          minLength={3}
        />
      </div>
      <div className="block text-white">
        <label htmlFor="Password" className="block mb-3 text-3xl">
          Password
        </label>
        <input
          type="password"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="password"
          onChange={handleChange}
          value={user.password}
          minLength={5}
        />
      </div>
      <div className="block text-white">
        <label htmlFor="confirmPassword" className="block mb-3 text-3xl">
          {" "}
          Confirm Password
        </label>
        <input
          type="password"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="confirmPassword"
          onChange={handleChange}
          value={user.confirmPassword}
          minLength={5}
        />
      </div>
      {error && <p className="text-red-600">{errorMsg}</p>}
      <button
        type="submit"
        className="grid items-center px-24 py-3 mt-5 text-xl text-center text-white border border-white rounded-xl"
      >
        Register
      </button>
    </form>
  );
};
export default SignUp;
