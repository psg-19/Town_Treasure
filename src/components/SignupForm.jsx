import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios'




export const SignupForm = ({ setislogged }) => {
  const [check,setCheck]=useState(false)
  let navigate = useNavigate();
  const [showpass, setshowpass] = useState(false);
  const [showcomfirmpass, setshowcomfirmpass] = useState(false);

  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp:""
  });

  function changeHandler(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [isLoading,setIsLoading]=useState(false)


  async function sendOtp(event) {
    if(isLoading){
      toast.error("Please wait !!!");
      return;
    }
setIsLoading(true)
    formData.name=formData.firstname+" "+formData.lastname;
    console.log('hhhhhhh')
    await axios.post("http://localhost:8080/register",formData)
    .then((res)=>{ toast.success("OTP sent successfully !!!")
  setCheck(true)
  })
    .catch((e)=> toast.error("something went wrong while sending otp"))

    setIsLoading(false)
  }

  async function submitHandler(event) {
  event.preventDefault();


    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords donot match");
      return;
    }


    // setislogged(true);
   
   

formData.name=formData.firstname+" "+formData.lastname;
console.log(formData)
await axios.put("http://localhost:8080/verify-account?email="+formData.email+"&otp="+formData.otp,formData)

.then((res)=>{console.log(res)
  navigate("/login");
  toast.success("Account created  successfully!!!");
})
.catch((e)=> {
  console.log(e)
  toast.error("something went wrong ,please try again later ")
})
    // const accountData = {
    //   ...formData,accountType
    // };
    // console.log("printing account data");
    // console.log(accountData);
  }

  const [accountType,setaccountType]=useState('student')

  return (
    <div>
      {/* studenrt - instructoir tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full  max-w-max">
        <button
        onClick={()=> setaccountType('student')}
        className={`${accountType==='student' ? 
        'bg-rickblack-900 text-richblack-5 border border-white':
        'bg-transparent text-richblack-200'} py-2 px-5 rounded-full transition-all duration-200`}
        >Solo Traveller
            </button>

        <button
        onClick={() => setaccountType('instructor')}
        className={`${accountType==='instructor' ? 
        'bg-rickblack-900 text-richblack-5 border border-white':
        'bg-transparent text-richblack-200'} py-2 px-5 rounded-full transition-all duration-200`}
        >
            Group Traveller
            </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* ---------------fname,lname------------------ */}
        <div className="flex justify-between gap-x-4 mt-[10px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              {" "}
              First Name <sup className="text-pink-200">*</sup>
            </p>

            <input
              type="text"
              name="firstname"
              required
              id=""
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px]"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>

            <input
              type="text"
              name="lastname"
              required
              id=""
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px]"
            />
          </label>
        </div>

        {/* --------------------email------------------------ */}
<div className="mt-[20px]">
        <label >
          <p className="text-[0.875rem] w-full text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            name="email"
            required
            id=""
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px]"
          />
        </label>
        </div>
        {/* ----------------pass------------- */}

        <div className="flex justify-between gap-x-4 mt-[20px] ">
          <label className="w-full relative ">
            <p className="text-[0.875rem] text-richblack-5 mb-1  leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showpass == true ? "text" : "password"}
              name="password"
              required
              id=""
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px]"
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
          </label>

          <label className="w-full relative ">
            <p className="text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showcomfirmpass == true ? "text" : "password"}
              name="confirmPassword"
              required
              id=""
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px]"
            />

            <span
              onClick={() => {
                setshowcomfirmpass((prevc) => !prevc);
              }}
              className="absolute right-3 mt-2 ml top-[30px] cursor-pointer "
            >
              {showcomfirmpass === true ? (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* ---------------signup btn------------------ */}

      </form>

     {

      check ? (<div>
         <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
             OTP <sup className="text-pink-200">*</sup>
            </p>

            <input
              type="text"
              name="otp"
              required
              id=""
              onChange={changeHandler}
              placeholder="Enter OTP"
              
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5
        w-full p-[12px]"
            />
          </label>
          <button
          className="bg-yellow-50 rounded-[8px] font-medium
text-richblack-900 px-[12px] py-[8px] mt-6 w-full"
   onClick={(e)=> submitHandler(e)}     >
          SignUp
        </button>
       

      </div>):( <button
        className="bg-yellow-50 rounded-[8px] font-medium
text-richblack-900 px-[12px] py-[8px] mt-6 w-full"
onClick={()=> sendOtp()}
      >
        
        {
          isLoading ? "Please Wait":"Send OTP"
        }
      </button>)

     }

        
    </div>
  );
};