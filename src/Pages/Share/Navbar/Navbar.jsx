/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../../ContextOrProvider/AuthProvider";
const Navbar = () => {
  const { userCheck } = useContext(AuthContext);

  const [paths, setPaths] = useState([
    { path: "/profile", label: "Profile" },
    { path: "/dashboard", label: "Dashboard" },
  ]);
 
  return (
    <nav className="flex text-gray-600 font-poppins font-medium  flex-row sticky gap-4 bg-red-300 text-center justify-center w-full h-12 p-3">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavLink style={{ color: "black" }} to="/">
        LOGO
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          [
            isActive ? "active" : undefined,
            isPending ? "pending" : undefined,
          ].join(" ")
        }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/service">Service</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/friends">Friends</NavLink>
      <NavLink to="/form">Form</NavLink>
      <NavLink to="/map">Google Map</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      {userCheck &&
        paths.map(({ path, label }) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
    </nav>
  );
};

export default Navbar;
