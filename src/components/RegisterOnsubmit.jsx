/* eslint-disable no-unused-vars */
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
 
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../ContextOrProvider/AuthProvider";

const RegisterOnsubmit = () => {
  const { createUser } = useContext(AuthContext);
  const [passCheck, setPassCheck] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    const password = e.target.password.value;
    if (password.length < 6) {
      setPassCheck("Password should need 8 Characters!");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setPassCheck("Your password should be make Uppercase & Lowercase!");
      return;
    }
    try {
      const userCredential = await createUser(
        e.target.email.value,
        e.target.password.value
      );
      const user = userCredential.user;
      setFormData({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });

      await sendEmailVerification(user);
      await updateProfile(user, {
        displayName: e.target.name.value,
      });

      alert("Check Your Email for Verification!");
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="mx-auto border bg-gray-500 w-2/6 text-center text-3xl">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h2>Register Onsubmit</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5 ">
        <input
          type="text"
          className="bg-gray-200 p-2 w-4/5 mx-auto text-2xl"
          name="name"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="bg-gray-200 p-2 w-4/5 mx-auto text-2xl"
          name="email"
          placeholder="Your Email"
        />
        <input
          type="password"
          placeholder="type password"
          className="bg-gray-200 p-2 w-4/5 mx-auto text-2xl"
          name="password"
        />
        <button
          value="register"
          type="submit"
          className="btn btn-secondary bg-pink-500 w-2/5 mx-auto rounded-2xl p-2 text-white"
        >
          Submit
        </button>
        {<span className="mx-auto text-red-200 text-2xl">{passCheck}</span>}
      </form>
    </div>
  );
};

export default RegisterOnsubmit;
