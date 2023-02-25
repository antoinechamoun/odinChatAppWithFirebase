import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchUserById } from "../../firebase/firebase";
import { IChat } from "../../types/types.chat";
import { IUser } from "../../types/types.user";
import { getTime } from "../../utils/getTime";
interface UserChatProps {
  chat: IChat;
}

const UserChatInfo = ({ chat }: UserChatProps) => {
  const [sentToUser, setSentToUser] = useState<IUser>();
  const navigate = useNavigate();
  useEffect(() => {
    searchUserById(chat.members[1]).then((res) => setSentToUser(res));
  }, []);

  const showChat = () => {
    navigate(`/${chat.chatId}`);
  };

  return (
    <div className="user-chat-info-container" onClick={showChat}>
      <div className="user-chat-info-left">
        <img src={sentToUser?.profilePic} className="user-logo" />
        <div className="user-name-info">
          <div className="user-name-title">{sentToUser?.userName}</div>
          <div className="user-last-chat">
            {chat.content[chat.content.length]
              ? chat.content[chat.content.length].message
              : "Select to start chatting"}
          </div>
        </div>
      </div>
      <div className="user-chat-info-right">
        <p className="last-chat-date">
          {chat.content[chat.content.length]
            ? chat.content[chat.content.length].date
            : getTime(chat.date)}
        </p>
      </div>
    </div>
  );
};

export default UserChatInfo;
