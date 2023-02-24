import { useUser } from "../context/UserContext";
import { AiOutlinePlus, AiOutlineLogout } from "react-icons/ai";
import { SignOut } from "../firebase/firebase";

const Header = () => {
  const { user, setShowUserSearchModal } = useUser();

  const handleSignOut = () => {
    SignOut();
  };

  return (
    <div className="header-container">
      <div className="name-title">
        <h1 className="user-letter">{user.userName.charAt(0).toUpperCase()}</h1>
        <h2>Chats</h2>
      </div>
      <div className="btns-container">
        <button
          className="add-chat btn"
          onClick={() => setShowUserSearchModal(true)}>
          <AiOutlinePlus />
        </button>
        <button className="three-dots btn" onClick={() => handleSignOut()}>
          <AiOutlineLogout />
        </button>
      </div>
    </div>
  );
};

export default Header;
