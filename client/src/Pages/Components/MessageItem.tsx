import { DateTime, fromIso } from "ts-luxon";

export interface Mensagem {
  _id: string;
  title: string;
  message: string;
  author: Author;
  date: Date;
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

const MessageItem = ({ mensagem }: Mensagem) => {
  return (
    <div className="font-roboto">
      <div
        id="card"
        className="text-white w-[90vw] lg:w-[50vw] rounded-xl  m-auto bg-zinc-900 grid grid-cols-4 p-4 h-auto"
      >
        <h1 className="col-span-2 text-2xl">{mensagem.title}</h1>
        <p className="col-span-2">{mensagem.author.username}</p>
        <p className="col-span-4 my-3">{mensagem.message}</p>
        <p className="col-span-2">{mensagem.date}</p>
      </div>
    </div>
  );
};
export default MessageItem;
