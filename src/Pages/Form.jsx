import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
// import {  useNavigate } from "react-router-dom";
 

const Form = () => {
  const firstFocus = useRef(null);
  const secondFocus = useRef(null);
  const [value, setValue] = useState({
    name:'',
    email: '',
    password:'',
  });
 
  const pass = useRef(null);
  const [error,setError] = useState('');
  const [check,setCheck] = useState('');
  useEffect(()=>{
    firstFocus.current.focus();
    
  },[])
  const handleChange = (e) => {
    
    e.preventDefault();
      if(e.target.name==='password'){
         setCheck( e.target.value.length>=8);
          
      }
  
    const { name, value } = e.target;
     if(name==='password'){
       console.log();
     }
    setValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 

  const submitFn = e => {
  
    e.preventDefault();
    //  console.log('e.currentTarget',e.currentTarget);
    // const formData = new FormData(e.currentTarget);
    // console.log('formData',formData.get('email'));
    try {
      if(value.password.length<8){
        pass.current.focus();
           setError('Password should be length 8 && strong!')
           
       }
       else{
        setValue({
          name:'',
          email: '',
          password:'',
         });
       }
    } catch (error) {
      console.error(error);
     
    }
    
 console.log(value);
  }


  return (
    <div className="w-lvw h-1vh text-center flex flex-col justify-center items-center">
      <Helmet><title>Form</title></Helmet>
      <h2>FORM</h2>
      <form
        action=""
        onSubmit={submitFn}
        className="w-[500px] h-[500px] bg-gray-300 text-black flex flex-col items-center gap-5 p-4"
      >
        <div> <label htmlFor="Full-Name">Full Name:</label>
        <input ref={firstFocus}
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          className="bg-gray-100"
        /></div>
        <br />
        <div>
        <label htmlFor="Email">Email:</label>
        <input
         ref={secondFocus}
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
          className="bg-gray-100 " required
        />
        </div>
        <br />
        <div>
        <label htmlFor="Password">Password:</label>
        <input
        ref={pass}
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
          className="bg-gray-100 "
        />
        
        </div>
        {
          !check && <p>{error}</p>
        }
        <br />
        <button className="bg-green-300 w-[100px] h-[30px]">Submit</button>
      </form>
    </div>
  );
};

export default Form;
