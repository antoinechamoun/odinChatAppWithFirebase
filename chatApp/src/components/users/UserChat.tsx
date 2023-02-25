import { useUser } from "../../context/UserContext";
import UserChatInfo from "./UserChatInfo";

const UserChat = () => {
  const { userChats } = useUser();

  return (
    <div className="user-chat-info">
      {userChats?.map((chat) => {
        return <UserChatInfo key={chat.chatId} chat={chat} />;
      })}
    </div>
  );
};

export default UserChat;
