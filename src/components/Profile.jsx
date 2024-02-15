import { useContext } from "react";
import { AuthContext } from "../ContextOrProvider/AuthProvider";

 

const Profile = () => {
  const{ userCheck} = useContext(AuthContext)
  return (
    <div className="text-white text-center mx-auto p-20">
      <h2>{userCheck?.displayName}</h2>
      <h2>{userCheck?.email}</h2>
    </div>
  );
};

export default Profile;