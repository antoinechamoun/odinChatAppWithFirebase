import { useUser } from "../context/UserContext";
import Login from "../pages/Login";
import ChatData from "./chats/ChatData";
import Navbar from "./Navbar";
import SearchUserModal from "./SearchUserModal";

const Body = () => {
  const { user } = useUser();

  if (user.userName === "") {
    return <Login />;
  }

  return (
    <div className="body-container">
      <SearchUserModal />
      <Navbar />
      <ChatData />
    </div>
  );
};

export default Body;
