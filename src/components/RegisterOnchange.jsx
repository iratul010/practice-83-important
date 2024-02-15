import { useState } from "react";
import { Helmet } from "react-helmet-async";

const RegisterOnchange = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = e => {
    console.log("e.target", e.target);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can send the form data to your backend or perform any other actions
  };
  return (
    <div className="mx-auto border bg-gray-500 w-2/6 text-center text-3xl">
      <Helmet><title>Register</title></Helmet>
      <h2>Register Onchange</h2>
      <div className="flex flex-col gap-3 p-5 ">
        <input
          type="text"
          className="bg-gray-200 p-2 w-4/5 mx-auto text-2xl"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="bg-gray-200 p-2 w-4/5 mx-auto text-2xl"
          name="email"
          onChange={handleChange}
          placeholder="Your Email"
          value={formData.email}
        />
        <input
          type="password"
          placeholder="type password"
          value={formData.pass}
          className="bg-gray-200 p-2 w-4/5 mx-auto text-2xl"
          name="password"
          onChange={handleChange}
        />
        <button
          value="Register"
          type="submit"
          onClick={handleSubmit}
          className="btn btn-secondary bg-pink-500 w-2/5 mx-auto rounded-2xl p-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegisterOnchange;
