import { Outlet   } from "react-router-dom";
import Header from "../Pages/Share/Header/Header";
import Navbar from "../Pages/Share/Navbar/Navbar";
 

const Root = () => {
 
  return (
    <div className="container  mx-auto">
      <Header/>
       <Navbar/>
      <Outlet /> 
    </div>
  );
};

export default Root;
