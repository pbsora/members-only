import Message from "./Components/Message";
import NewMessage from "./Components/NewMessage";
import { useState, useContext } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import axios from "axios";

import { ILogged, UserContext } from "../Context/UserContext";

const Home = () => {
  const [option, setOption] = useState("message");
  const { logged, setAdmin } = useContext(UserContext) as ILogged;
  const [parent] = useAutoAnimate();

  const getAdmin = async () => {
    const admin = await axios({
      url: "get-admin",
      method: "post",
      withCredentials: true,
      data: { user: logged },
    });

    if (admin.data.message) {
      setAdmin(true);
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-center m-auto mt-3 mb-20 text-xl text-white font-roboto">
        {logged && (
          <button
            onClick={getAdmin}
            className="absolute text-transparent bg-transparent top-16 right-16 hover:text-white"
          >
            Get admin privilege
          </button>
        )}

        <p
          className={`mr-6 cursor-pointer ${
            option === "message" && "border-b border-white"
          }`}
          onClick={() => setOption("message")}
        >
          Messages
        </p>
        {logged && (
          <p
            className={`mr-6 cursor-pointer ${
              option === "newMessage" && "border-b border-white"
            }`}
            onClick={() => setOption("newMessage")}
          >
            New Message
          </p>
        )}
      </div>
      <div ref={parent} className="mt-10 ">
        {option === "message" ? (
          <Message />
        ) : (
          <NewMessage setOption={setOption} />
        )}
      </div>
    </>
  );
};
export default Home;
