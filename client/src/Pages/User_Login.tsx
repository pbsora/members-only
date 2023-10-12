import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Login from "./Components/Login.tsx";
import SignUp from "./Components/Sign-up.tsx";

const User_Login = () => {
  const [option, setOption] = useState<string>("log-in");
  const [parent] = useAutoAnimate();

  const changeOption = (newOption: string) => {
    setOption(newOption);
  };

  return (
    <>
      <div className="flex flex-col" ref={parent}>
        <div className="flex items-center justify-center gap-3 mt-5 text-center text-white font-roboto">
          <p
            className={`mr-6 cursor-pointer ${
              option === "log-in" && "border-b border-white"
            }`}
            onClick={() => changeOption("log-in")}
          >
            Login
          </p>
          <p
            className={`mr-6 cursor-pointer ${
              option === "sign-up" && "border-b border-white"
            }`}
            onClick={() => changeOption("sign-up")}
          >
            Sign-up
          </p>
        </div>

        {option === "log-in" ? <Login /> : <SignUp />}
      </div>
    </>
  );
};
export default User_Login;
