import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios'


export const LoginForm = (props) => {
  let setislogged = props.setislogged;

  const navigate = useNavigate();

  const [showpass, setshowpass] = useState(false);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setformData((prevdata) => ({
      ...prevdata,
      [event.target.name]: event.target.value,
    }));

  }

  const [isLoading,setIsLoading]=useState(false);

 async function submitHandler(e) {

  e.preventDefault()
    if(isLoading){
      toast.error("Please wait !!!");
      return;
    }
setIsLoading(true)
   
    await axios.put("http://localhost:8080/login",formData)
    .then((res)=>{
  // setCheck(true)
  if(res.data=="Password is incorrect"){
    toast.error("Wrong password !!!")
    return
  }
  toast.success("Login successfully !!!")
  setislogged(true);
    console.log(res)
// navigate('/;')
  navigate("/");

  })
    .catch((e)=> toast.error("something went wrong while logging in"))

    setIsLoading(false)



    // setislogged(true);
    

    // navigate("/states");

    // console.log('Printing the final data')
    // console.log(formData)
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6
    "
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>

        <input
          type="email"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px]"
          placeholder="Enter email id"
          name="email"
          required
          value={formData.email}
          onChange={changeHandler}
        />
      </label>

      {/* ------------------------------------------------- */}
      <label className="w-full relative ">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>

        <input
          type={showpass === true ? "text" : "password"}
          placeholder="Enter password"
          name="password"
          required
          value={formData.password}
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px]"
          onChange={changeHandler}
        />

        <span
          onClick={() => {
            setshowpass((prev) => !prev);
          }}
          className="absolute right-3 mt-2 top-[30px] cursor-pointer "
        >
          {showpass === true ? (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <NavLink to="#">
          <p className="text-xs mt-1 max-w-max ml-auto text-blue-100">
            Forgot Password
          </p>
        </NavLink>
      </label>

      <button
        className="bg-yellow-50 rounded-[8px] font-medium
        text-richblack-900 px-[12px] py-[8px] mt-6"
      >
       {
        isLoading ? "Please Wait":" SignIn"
       }
      </button>
    </form>
  );
};