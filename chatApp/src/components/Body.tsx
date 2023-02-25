import { useUser } from "../context/UserContext";
import Login from "../pages/Login";
import ChatData from "./chats/ChatData";
import Navbar from "./Navbar";
import SearchUserModal from "./SearchUserModal";
import ReactLoading from "react-loading";

const Body = () => {
  const { user, isLoading } = useUser();

  if (user.userName === "") {
    return <Login />;
  }

  return (
    <div className="body-container">
      <SearchUserModal />
      <Navbar />
      {isLoading ? (
        <ReactLoading
          type="spin"
          color="rgba(128, 128, 128, 0.7)"
          className="chats-loader"
        />
      ) : (
        <ChatData />
      )}
    </div>
  );
};

export default Body;
