// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/tt_logo.png";
// import { toast } from "react-hot-toast";

// export const Navbar = (props) => {
//   let setisLoggedInInIn = props.setisLoggedInInIn;
//   let isLoggedInIn = props.isLoggedInIn;

//   return (
//     <div className="flex justify-between item-center w-11/12 py-4 mx-auto max-w-[1160px] overflow-x-hidden ">
//       <NavLink to="/">
//         <img src={logo} alt="logo" width={120} height={10} loading="lazy" />
//       </NavLink>

//       <nav className="flex justify-center items-center">
//         <ul className="flex gap-x-6 text-richblack-100 ">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/Aboutus">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/Contactus">Contact</NavLink>
//           </li>
//         </ul>
//       </nav>

//       <div className="flex justify-evenly items-center text-richblack-100 gap-x-4">
//         {!isLoggedInIn && (
//           <NavLink to="/Login">
//             <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">
//               Login
//             </button>
//           </NavLink>
//         )}
//         {!isLoggedInIn && (
//           <NavLink to="/Signup">
//             <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">
//               Signup
//             </button>
//           </NavLink>
//         )}
//         {isLoggedInIn && (
//           <NavLink to="/">
//             <button
//               className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700"
//               onClick={() => {
//                 setisLoggedInInIn(false);
//                 toast.success("Logged Out");
//               }}
//             >
//               Logout
//             </button>
//           </NavLink>
//         )}
//         {isLoggedInIn && (
//           <NavLink to="/Dashboard">
//             <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">
//               Dashboard
//             </button>
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };


import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/tt_logo.png'
import {NavLink,useNavigate} from 'react-router-dom'

import {toast} from 'react-hot-toast'

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import classNames from 'classnames';



 export const Navbar = (props) => {
    let setisLoggedIn = props.setisLoggedIn;
    let isLoggedIn = props.isLoggedIn;

   
const [click,setClick]=useState('')

    

const [isLoading,setIsLoading]=useState(false);


//---------------------------------------------------------
const [hamburger,setHamburger]=useState(false);
//-----------------------------------------------------------
    
 const navigate=useNavigate()

    const logoutHandler=async()=>{
      if(isLoading){
        toast.error("Please Wait ,Logging out!!!");
        return
      }
      
      setIsLoading(true);
      
      navigate('/')
      setisLoggedIn(false)

   setIsLoading(false)

    }
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav1  className={classNames(
      'fixed w-full transition-all duration-300 ease-in-out z-50',
      {
      'shadow-md py-5': !isScrolled,
        ' shadow-sm py-0': isScrolled,
      }
    )}>
    <div className={`flex  no-scrollbar overflow-x-hidden flex-col items-center  backdrop-blur-sm backdrop-brightness-75 backdrop-contrast-75 fixed w-[100vw] z-50 ${hamburger ? ' h-[100vh] overflow-y-scroll  ':'  justify-center  '} `}>

<div className='flex  items-center justify-between w-[90%] h-24 ' >
        
        <div>
        <img src={logo} className=' rounded-full h-20' alt="" />
        </div>

        <nav className=' flex items-center justify-center sm:hidden lg:block md:block all:hidden'>

            <ul className=' flex gap-x-4 items-center justify-center'>
                <li className={`text-black cursor-pointer font-mullish py-7 hover:text-yellow-900
                transition-all duration-200 flex justify-center items-center  relative group
                invert
                ${click =="  Home  " ? ("text-yellow-900"):("")}
                
                `}
                onClick={(e)=> {
                  setClick(e.target.innerText);
                  navigate('/')
                }}
                >
                  <NavLink to='/' ><pre className=' font-extrabold'>  Home  </pre></NavLink>
                <div className={`h-1 absolute bottom-0 
                 ${click =="  Home  " ? ("bg-yellow-900 block"):("hidden")}
                w-full  bg-yellow-900 group-hover:block  `}></div>
                </li>


                <li className={`text-black flex justify-center items-center cursor-pointer font-mullish py-7 hover:text-yellow-900
                transition-all duration-200   relative group
                invert
                ${click =="States" ? ("text-yellow-900"):("")}
                
                `}  onClick={(e)=> {
                  setClick(e.target.innerText);
                  navigate('/states')
                }}><NavLink to='/states' className='font-bold'>States</NavLink>
                
                <div className={`h-1 absolute bottom-0 
                 ${click =="States" ? ("bg-yellow-900"):("hidden")}
                w-full  bg-yellow-900 group-hover:block  `}></div></li>
                <li className={`text-black cursor-pointer font-mullish py-7 hover:text-yellow-900
                transition-all duration-200 flex justify-center items-center  relative group
                invert
                ${click =="Reciever Posts" ? ("text-yellow-900"):("")}
                
                `}  onClick={(e)=> {
                  setClick(e.target.innerText);
                  navigate('/recieverPost')
                }}><NavLink  className='font-bold' to='/recieverPost'>Reciever Posts </NavLink>
                   <div className={`h-1 absolute bottom-0  
                 ${click =="Reciever Posts" ? ("bg-yellow-900"):("hidden")}
                w-full  bg-yellow-900 group-hover:block  `}></div>
                </li>
                <li className={`text-black flex justify-center items-center cursor-pointer font-mullish py-7 hover:text-yellow-900
                transition-all duration-200   relative group
                invert
                ${click =="Connected Posts" ? ("text-yellow-900"):("")}
                
                `}  onClick={(e)=> {
                  setClick(e.target.innerText);
                  navigate('/connectedPosts')
                }}><NavLink  className='font-bold' to='/connectedPosts'>Connected Posts</NavLink>
                   <div className={`h-1 absolute bottom-0  
                 ${click =="Connected Posts" ? ("bg-yellow-900"):("hidden")}
                w-full  bg-yellow-900 group-hover:block  `}></div>
                </li>
                
            </ul>

        </nav>
       
   <div className=' sm:hidden lg:block md:block all:hidden flex justify-center items-center'>

{
   isLoggedIn  ? (<ul className='flex gap-x-4 justify-center items-center'>

   <li className={`border-2 py-1 px-4 rounded-lg  flex items-center justify-center bg-white border-blue-600 font-bold hover:bg-green1-dark `}  onClick={()=>{
logoutHandler()
setClick(null)
}
}><NavLink to='/' className='font-bold flex justify-center items-center'>
  {isLoading ? 'Please Wait ...':'Log out'}</NavLink></li>
         
   


     </ul>
    

     ):
     (<ul className='flex items-center justify-center gap-x-4 w-auto gap-y-2 md:flex-wrap sm:flex-wrap'>

   <li className={` py-1 px-4 rounded-lg  hover:text-black flex items-center justify-center font-bold hover:bg-slate-50 ${click=='Login' ? ' bg-white text-black border-yellow-900 border-[3px] ':' text-white border-blue-600 border-2 '} `}    onClick={(e)=> {
                  setClick(e.target.innerText);
                  // console.log(e.target.innerText);
                  navigate('/login')
                }} ><NavLink to='/login' >Login</NavLink></li>
   <li onClick={(e)=> {
                  setClick(e.target.innerText);
                  // console.log(e.target.innerText);
                  navigate('/signUp')
                }}  className={` py-1 px-4 rounded-lg  flex items-center  hover:bg-slate-200 justify-center font-bold ${click=='Sign Up' ? ' bg-slate-200 border-yellow-900 border-[3px] ':' bg-white border-2  border-blue-600'}`}><NavLink to='/signUp'>Sign Up</NavLink></li>
         
     </ul>)
}

   </div>
   
   <button className='sm:block   all:block lg:hidden md:hidden text-4xl'
   
   onClick={()=> {
    if(!hamburger){
      setHamburger(true);
    }
    
    else{
      setHamburger(false);

    }
   
   }}

   >{hamburger ? <RxCross1 />:<RxHamburgerMenu />}</button>


    </div>

    <div className={`lg:hidden md:hidden gap-y-4 flex flex-col  ${hamburger ? ' sm:block all:block ':' sm:hidden all:hidden '}  `}>


  

<ul className=' sm:block all:block flex gap-x-4 lg:hidden md:hidden items-center flex-col gap-y-3 justify-center'>

{isLoggedIn ==true && <ul className='flex flex-row justify-center items-center gap-x-4'>
  
 


   <li className={`text-black cursor-pointer font-mullish py-7 hover:text-yellow-900
    transition-all duration-200 flex justify-center items-center  relative group invert
    
    ${click =="Your Profile" ? ("text-yellow-900"):("")}
    
    `} 
   onClick={()=>{
    setHamburger(false)
    setClick('Your Profile')
    navigate('/profile')
   }}

   >
    <NavLink className='font-bold' to='/profile'>Your Profile</NavLink>

    <div className={`h-1 absolute bottom-0 
     ${click =="Your Profile" ? ("bg-yellow-900 block"):("hidden")}
    w-full  bg-yellow-900 group-hover:block  `}></div>
    </li>


  </ul>}

    <li className={`text-black cursor-pointer font-mullish py-7 hover:text-yellow-900
    transition-all duration-200 flex justify-center items-center  relative group invert
    
    ${click =="  Home  " ? ("text-yellow-900"):("")}
    
    `}
    onClick={(e)=> {
      setClick(e.target.innerText);
      setHamburger(false)
      navigate('/')
    }}
    >
      <NavLink to='/' ><pre className='  font-extrabold'>  Home  </pre></NavLink>
    <div className={`h-1 absolute bottom-0 
     ${click =="  Home  " ? ("bg-yellow-900 block"):("hidden")}
    w-full  bg-yellow-900 group-hover:block  `}></div>
    </li>


    <li className={`text-black flex justify-center items-center cursor-pointer font-mullish py-7 hover:text-yellow-900 invert
    transition-all duration-200   relative group
    
    ${click =="States" ? ("text-yellow-900"):("")}
    
    `}  onClick={(e)=> {
      setClick(e.target.innerText);
      setHamburger(false)
      navigate('/states')
    }}><NavLink to='/states' className='font-bold'>States</NavLink>
    
    <div className={`h-1 absolute bottom-0 
     ${click =="States" ? ("bg-yellow-900"):("hidden")}
    w-full  bg-yellow-900 group-hover:block  `}></div></li>
    <li className={`text-black cursor-pointer font-mullish py-7 hover:text-yellow-900
    transition-all duration-200 flex justify-center items-center  relative group invert
    
    ${click =="Reciever Posts" ? ("text-yellow-900"):("")}
    
    `}  onClick={(e)=> {
      setClick(e.target.innerText);
      setHamburger(false)
      navigate('/recieverPost')
    }}><NavLink  className='font-bold' to='/recieverPost'>Reciever Posts </NavLink>
       <div className={`h-1 absolute bottom-0  
     ${click =="Reciever Posts" ? ("bg-yellow-900"):("hidden")}
    w-full  bg-yellow-900 group-hover:block  `}></div>
    </li>
    <li className={`text-black flex justify-center items-center cursor-pointer font-mullish py-7 hover:text-yellow-900 invert
    transition-all duration-200   relative group
    
    ${click =="Connected Posts" ? ("text-yellow-900"):("")}
    
    `}  onClick={(e)=> {
      setClick(e.target.innerText);
      setHamburger(false)
      navigate('/connectedPosts')
    }}><NavLink  className='font-bold' to='/connectedPosts'>Connected Posts</NavLink>
       <div className={`h-1 absolute bottom-0  
     ${click =="Connected Posts" ? ("bg-yellow-900"):("hidden")}
    w-full  bg-yellow-900 group-hover:block  `}></div>
    </li>



    
</ul>

<div className='  flex justify-center items-center mt-4'>

{
   isLoggedIn  ? (<ul className='flex gap-x-4 justify-center items-center'>

   <li className={`border-2 py-1 px-4 rounded-lg  flex items-center justify-center bg-white border-blue-600 font-bold hover:bg-green1-dark `}  onClick={()=>{
logoutHandler()
setClick(null)
setHamburger(false)
}
}><NavLink to='/' className='font-bold flex justify-center items-center'>
  {isLoading ? 'Please Wait ...':'Log out'}</NavLink></li>
         
 


     </ul>
    

     ):
     (<ul className='flex items-center justify-center gap-x-4 w-auto gap-y-2 md:flex-wrap sm:flex-wrap'>

   <li className={` py-1 px-4 rounded-lg  flex items-center justify-center font-bold hover:bg-slate-50 ${click=='Login' ? ' bg-white border-yellow-900 border-[3px] ':' border-blue-600 border-2 '} `}    onClick={(e)=> {
                  setClick(e.target.innerText);
                  setHamburger(false)
                  // console.log(e.target.innerText);
                  navigate('/login')
                }} ><NavLink to='/login'>Login</NavLink></li>
   <li onClick={(e)=> {
                  setClick(e.target.innerText);
                  setHamburger(false)
                  // console.log(e.target.innerText);
                  navigate('/signUp')
                }}  className={` py-1 px-4 rounded-lg  flex items-center  hover:bg-slate-200 justify-center font-bold ${click=='Sign Up' ? ' bg-slate-200 border-yellow-900 border-[3px] ':' bg-white border-2  border-blue-600'}`}><NavLink to='/signUp'>Sign Up</NavLink></li>
         
     </ul>)
}

   </div>



    </div>

    </div>
    </nav1>
  )
}