import { useState } from "react";

import Login from "./Components/Login.tsx";
import SignUp from "./Components/Sign-up.tsx";

const User_Login = () => {
  const [option, setOption] = useState<string>("log-in");

  const changeOption = (newOption: string) => {
    setOption(newOption);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-3 mt-5 text-center text-white font-roboto">
          <p
            className="mr-6 cursor-pointer"
            onClick={() => changeOption("log-in")}
          >
            Login
          </p>
          <p
            className="mr-6 cursor-pointer"
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
