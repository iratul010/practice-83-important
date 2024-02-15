import { useContext } from "react";
import { AuthContext } from "../ContextOrProvider/AuthProvider";
import { PropTypes } from "prop-types";
import { Navigate,useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, userCheck } = useContext(AuthContext);
  
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (userCheck) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
