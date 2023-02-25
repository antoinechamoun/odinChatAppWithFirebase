import { useEffect, useState } from "react";
import { searchUserById } from "../../firebase/firebase";
import { IChat } from "../../types/types.chat";
import { IUser } from "../../types/types.user";

interface CurrentChatProps {
  currentChat: IChat;
}

const ChatDataHeader = ({ currentChat }: CurrentChatProps) => {
  const [currentChatUser, setCurrentChatUser] = useState<IUser>();

  useEffect(() => {
    searchUserById(currentChat.members[1]).then((res) =>
      setCurrentChatUser(res)
    );
  }, []);
  return (
    <div className="chat-header-container">
      <div>
        <img src={currentChatUser?.profilePic} className="chat-header-user" />
        <div>
          <h4></h4>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ChatDataHeader;
