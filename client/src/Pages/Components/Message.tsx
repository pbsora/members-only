import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DateTime } from "ts-luxon";
import { AiFillDelete } from "react-icons/ai";

import { UserContext, ILogged } from "../../Context/UserContext";

export interface Message {
  _id: string;
  title: string;
  message: string;
  author: Author;
  date: Date | string;
  __v: number;
}

export interface Author {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  admin: boolean;
  __v: number;
}

const Message = () => {
  const [messages, setMessages] = useState<Message[]>();
  const { admin } = useContext(UserContext) as ILogged;

  useEffect(() => {
    const getMessages = async () => {
      const { data } = await axios({
        method: "get",
        withCredentials: true,
        url: "http://localhost:3000/message/messages",
      });

      setMessages(data);
    };
    getMessages();
  }, []);

  return (
    <div className="flex flex-col gap-6 mb-10">
      {messages &&
        messages.map((message) => (
          <div className="font-roboto">
            <div
              id="card"
              key={message._id}
              className="text-white w-[90vw] lg:w-[50vw] rounded-xl  m-auto bg-zinc-900 grid grid-cols-4 p-4 h-auto"
            >
              <h1 className="col-span-2 text-2xl">{message.title}</h1>
              <p className="col-span-2">
                {admin
                  ? message.author.username[0].toUpperCase() +
                    message.author.username.slice(1)
                  : ""}
              </p>
              <p className="col-span-4 my-3">{message.message}</p>
              <p className="col-span-2">
                {DateTime.fromJSDate(
                  typeof message.date === "string"
                    ? new Date(message.date) // Convert the string to a Date
                    : message.date
                ).toLocaleString(DateTime.DATE_SHORT)}
              </p>
              {admin && (
                <div className="flex items-center justify-end col-start-4 text-3xl cursor-pointer hover:text-zinc-400">
                  <AiFillDelete />
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
export default Message;
