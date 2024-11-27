import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SecuredRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.auth);
  return auth ? children : <Navigate to="/signin" />;
};

export default SecuredRoute;
