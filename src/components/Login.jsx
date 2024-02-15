/* eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { HiEyeOff } from "react-icons/hi";

import { HiEye } from "react-icons/hi";

import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../ContextOrProvider/AuthProvider";
import auth from "../firebase/firebase.init";

const Login = () => {
  const {
    signInUser,
    userCheck,
    setUserCheck,
    googleLogIn,
    gitLogIn,
    loading,
  } = useContext(AuthContext);

  ("start-------private---------------");
  const location = useLocation();
  console.log("location", location);
  const navigate = useNavigate();
  console.log(location, "this is location");
  ("------------check------------end");
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(userCheck);
    if (userCheck?.emailVerified) {
      setShow(userCheck?.emailVerified);
    }
  }, [userCheck]);
  const [checking, setChecking] = useState(true);
  //1st--

  //2nd--
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUserCheck(null);
        console.log("LOGOUT");
      })
      .catch(error => {
        console.log(error);
      });
  };
  const googleSubmit = () => {
    console.log("Google Login");
    googleLogIn(googleProvider)
      .then(result => {
        const user = result.user;
        navigate(
          location?.state ? navigate(location.state) : navigate("/home")
        );
        console.log(user);
      })
      .catch(error => {
        const message = error.message;
        console.log("Error", message);
      });
  };
  const gitSubmit = () => {
    console.log("Git Login");
    gitLogIn(gitProvider)
      .then(result => {
        const user = result.user;
        navigate(
          location?.state ? navigate(location.state) : navigate("/home")
        );
      })
      .catch(error => {
        const message = error.message;
        console.log("Error", message);
      });
  };
  const signIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(result => {
        // Signed in
        const user = result.user;
        console.log("user", user);
        if (user.emailVerified) {
          console.log("user.emailVerified", user.emailVerified);
          alert("successfully login");
          navigate(
            location?.state ? navigate(location.state) : navigate("/home")
          );
          e.target.email.value = "";
          setPassword("");
        } else {
          alert("Check Your Email Address.");
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const [password, setPassword] = useState("");

  const handleInputChange = event => {
    setPassword(event.target.value);
  };

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div className="text-center relative bg-green-200 w-[500px] h-[500px] mx-auto my-10 ">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h2 className="text-center">Login Page</h2>
      <form onSubmit={signIn} className=" flex flex-col gap-3 border p-3 ">
        <input
          type="text"
          name="email"
          className="p-2 bg-neutral-100"
          placeholder="type your email"
        />

        <input
          type={checking ? "password" : "tex"}
          name="password"
          className="p-2 bg-neutral-100"
          placeholder="type your password"
          value={password}
          onChange={handleInputChange}
        />
        {/* Don't use here ⬇️ Link cause useLocation value can't stay */}
        {password && (
          <button
            className=" absolute top-24 right-10"
            onClick={() => setChecking(!checking)}
          >
            {checking ? <HiEyeOff /> : <HiEye />}
          </button>
        )}

        <button type="submit">submit</button>
      </form>
      {userCheck?.emailVerified ? (
        <button onClick={logOut} className="bg-red-200 p-5 m-3">
          Logout
        </button>
      ) : (
        <>
          <button
            onClick={googleSubmit}
            className="text-white bg-black p-3  rounded-2xl"
          >
            Login Google
          </button>
          <button
            onClick={gitSubmit}
            className="text-white bg-black p-3  rounded-2xl"
          >
            Login Github
          </button>
        </>
      )}
      {!userCheck?.email && (
        <>
          <Link className="block underline " to="/registerOnchange">
            RegisterOnchange
          </Link>

          <Link className="block underline " to="/registerOnsubmit">
            RegisterOnSubmit
          </Link>
        </>
      )}
      {userCheck?.email && (
        <div>
          <h2>{userCheck.displayName}</h2>
          <h2>{userCheck.email}</h2>
        </div>
      )}
    </div>
  );
};

export default Login;
