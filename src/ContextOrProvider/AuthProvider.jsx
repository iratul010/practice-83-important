/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
//1st
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading,setLoading] = useState(true)
  const [userCheck, setUserCheck] = useState(null);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    //monitoring- User is active or none --when render this function then it call again
    const unSubscriber = onAuthStateChanged(auth, currentUser => {
      if(currentUser===null || currentUser.emailVerified){
        
        setUserCheck(currentUser);
        setLoading(false)
      }
         
  
    });
    return () => {
      unSubscriber();
    };
  }, []);

  const googleLogIn = (googleProvider)=>{
            setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  const gitLogin= (gitProvider)=>{
    setLoading(true)
   return  signInWithPopup(auth,gitProvider)
  }
  
  const authInfo = {
    userCheck,
    createUser,
    signInUser,
    setUserCheck,
    googleLogIn,
    gitLogin,
    loading,
     
  };
  return (
    // 2nd
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
  //Everything⬇️
  // children: PropTypes.node,
};
export default AuthProvider;
