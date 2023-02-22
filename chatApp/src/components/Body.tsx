import { useUser } from "../context/UserContext";
import Login from "../pages/Login";
import Navbar from "./Navbar";

const Body = () => {
  const { user } = useUser();

  if (user.userName === "") {
    return <Login />;
  }

  return (
    <div className="body-container">
      <Navbar />
    </div>
  );
};

export default Body;
