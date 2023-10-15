import {
  useState,
  FormEvent,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { ILogged, UserContext } from "../../Context/UserContext";

import axios from "axios";

type Props = {
  setOption: Dispatch<SetStateAction<string>>;
};

const NewMessage = ({ setOption }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { logged } = useContext(UserContext) as ILogged;

  const newMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios({
      method: "POST",
      data: {
        title,
        message,
        author: logged,
      },
      withCredentials: true,
      url: "http://localhost:3000/message/new-message",
    });

    setOption("message");
  };

  return (
    <div className=" w-[100vw] md:w-[70vw] lg:w-[55vw] xl:w-[40vw]   m-auto">
      <form
        action="#"
        onSubmit={newMessage}
        className="flex flex-col items-center justify-center gap-9  h-[60vh] font-roboto text-white"
      >
        <div className="w-full px-3">
          <label htmlFor="title" className="block mb-3 text-3xl">
            Title
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            className="w-full py-3 text-2xl border border-white rounded-lg outline-none md:px-3 bg-zinc-700 focus:border-blue-500"
          />
        </div>
        <div className="w-full px-3 ">
          <label htmlFor="description" className="block mb-3 text-3xl">
            Description
          </label>
          <textarea
            name="description"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            cols={30}
            rows={10}
            className="w-full px-3 py-3 text-2xl border border-white rounded-lg outline-none bg-zinc-700 focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="grid items-center px-24 py-3 text-xl text-center text-white border border-white rounded-xl"
        >
          New Message
        </button>
      </form>
    </div>
  );
};
export default NewMessage;
