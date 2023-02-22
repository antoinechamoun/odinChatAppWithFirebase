import Header from "./Header";
import SearchUser from "./SearchUser";
import UserChat from "./UserChat";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Header />
      <SearchUser />
      <UserChat />
    </div>
  );
};

export default Navbar;
