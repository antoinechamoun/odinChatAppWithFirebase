import Header from "./Header";
import SearchChat from "./SearchChat";
import UserChat from "./users/UserChat";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Header />
      <SearchChat />
      <UserChat />
    </div>
  );
};

export default Navbar;
