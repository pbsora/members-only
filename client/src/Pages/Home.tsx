import Message from "./Components/Message";
import NewMessage from "./Components/NewMessage";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Home = () => {
  const [option, setOption] = useState("message");
  const [parent] = useAutoAnimate();

  return (
    <>
      <div className="flex items-center justify-center m-auto mt-3 mb-20 text-xl text-white font-roboto">
        <p
          className={`mr-6 cursor-pointer ${
            option === "message" && "border-b border-white"
          }`}
          onClick={() => setOption("message")}
        >
          Messages
        </p>
        <p
          className={`mr-6 cursor-pointer ${
            option === "newMessage" && "border-b border-white"
          }`}
          onClick={() => setOption("newMessage")}
        >
          New Message
        </p>
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
