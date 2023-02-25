import { useUser } from "../context/UserContext";
import { createNewChat } from "../firebase/firebase";
import { IUser } from "../types/types.user";

const SearchUserModal = () => {
  const {
    user,
    setSearchUser,
    showUserSearchModal,
    setShowUserSearchModal,
    usersFound,
  } = useUser();

  const startChat = (sentToId: string) => {
    createNewChat(user, sentToId);
    setShowUserSearchModal(false);
  };

  return (
    <div
      className={
        showUserSearchModal
          ? "search-user-modal show-modal"
          : "search-user-modal"
      }>
      <div className="inner-search-user-modal">
        <form>
          <input
            type="text"
            className="search-users-input"
            placeholder="Search"
            onChange={(e) => {
              setSearchUser(e.target.value);
            }}
          />
        </form>
        <div className="users-found">
          {usersFound?.map((user) => {
            return (
              <div
                key={user.uid}
                className="user-found"
                onClick={() => startChat(user.uid)}>
                <img src={user.profilePic} className="users-found-pic" />
                <p className="users-found-name">{user.userName}</p>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setShowUserSearchModal(false)}
          className="close-modal-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SearchUserModal;
