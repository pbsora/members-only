import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
function App() {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const getUser = async () => {
      const logInfo = await axios({
        method: "get",
        withCredentials: true,
        url: "http://localhost:3000/user",
      });

      const username = logInfo.data.username;
      setUser(username[0].toUpperCase() + username.slice(1));
      console.log(logInfo);
    };
    getUser();
  }, []);

  const logout = async () => {
    await axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3000/log-out",
    });
  };

  return (
    <>
      <nav className="flex justify-around w-full p-6 text-white border-b border-white bg-zinc-900 font-roboto">
        <Link to={"/"} className="text-xl">
          Midnight Club
        </Link>
        <Link to={user === "" ? "/log-in" : "#"}>
          {user === "" ? (
            "Login|Sign-up"
          ) : (
            <button onClick={logout}>{user}</button>
          )}
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
