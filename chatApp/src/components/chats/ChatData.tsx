import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChatById } from "../../firebase/firebase";
import { IChat } from "../../types/types.chat";
import ChatDataHeader from "./ChatDataHeader";
import ReactLoading from "react-loading";

const ChatData = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [currentChat, setCurrentChat] = useState<IChat>();

  useEffect(() => {
    if (id !== undefined) {
      setLoading(true);
      getChatById(id as string).then((res) => {
        setCurrentChat(res);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading)
    return (
      <ReactLoading
        type="spin"
        color="rgba(128, 128, 128, 0.7)"
        className="chat-loader"
      />
    );

  return (
    <div className="chat-data-container">
      {currentChat === undefined ? null : (
        <ChatDataHeader currentChat={currentChat as IChat} />
      )}
    </div>
  );
};

export default ChatData;
