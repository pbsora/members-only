import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../Context/UserContext";

function App() {
  const [logged, setLogged] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const logInfo = await axios({
        method: "get",
        withCredentials: true,
        url: "http://localhost:3000/user",
      });

      if (logInfo.data !== "") {
        const username =
          logInfo.data.username[0].toUpperCase() +
          logInfo.data.username.slice(1);
        setLogged(username);
        setAdmin(logInfo.data.admin);
      }
    };
    getUser();
  }, [logged]);

  const logout = async () => {
    await axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3000/log-out",
    });
    setLogged("");
    setAdmin(false);
  };

  return (
    <>
      <UserContext.Provider value={{ logged, setLogged, admin, setAdmin }}>
        <nav className="flex justify-around w-full p-6 text-white border-b border-white bg-zinc-900 font-roboto">
          <Link to={"/"} className="text-xl">
            Midnight Club
          </Link>
          <Link to={logged === "" ? "/log-in" : "#"}>
            {logged === "" ? (
              "Login | Sign-up"
            ) : (
              <button onClick={logout}>{logged}</button>
            )}
          </Link>
        </nav>
        <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default App;
