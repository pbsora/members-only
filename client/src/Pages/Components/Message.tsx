import { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
/*  import axios  { AxiosResponse }  from "axios";  */
/* import MessageItem from "./MessageItem"; */

interface Response {}
const Message = () => {
  const [messages, setMessages] = useState<any[]>();

  useEffect(() => {
    const getMessages = async () => {
      /*  const { data } = await axios({
        method: "get",
        withCredentials: true,
        url: "http://localhost:3000/message/messages",
      }); */
      /* const response = await axios.get<{data: Response[]}>("http://localhost:3000/message/messages") */

      const messages = await fetch("http://localhost:3000/message/messages");
      const data = await messages.json();
      const newData = Array.from(data);
      console.log(newData[0].author);

      setMessages(data);
    };
    getMessages();
  }, []);

  return (
    <>
      <MessageItem />
    </>
  );
};
export default Message;
