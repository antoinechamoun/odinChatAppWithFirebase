import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import {
  getProfilePicUrl,
  getUserName,
  isUserSignedIn,
  SignIn,
} from "../firebase/firebase";

const Login = () => {
  const { user, changeUser } = useUser();
  const navigate = useNavigate();
  const handleSignIn = () => {
    if (isUserSignedIn()) {
      navigate(`/${user.userName}`);
    } else {
      SignIn();
      let userName = getUserName();
      let picUrl = getProfilePicUrl();
      if (typeof userName === "string") {
        changeUser(userName, picUrl);
      }
    }
  };

  if (user.userName) {
    return <Navigate to={`/${user.userName}`} />;
  }

  return (
    <div className="login-container">
      <div className="inner-login-container">
        <img src="msg.jpg" alt="Not available" className="logo-img" />
        <h1 className="welcome-title">Welcome to ChatApp</h1>
        <button className="signin-btn" onClick={handleSignIn}>
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
