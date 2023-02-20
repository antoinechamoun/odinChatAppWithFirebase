import { Navigate } from "react-router-dom";
import { isUserSignedIn } from "../firebase/firebase";

const Body = () => {
  if (isUserSignedIn()) {
    console.log("hii");
    return <div>Body</div>;
  }
  return <Navigate to="/" />;
};

export default Body;
