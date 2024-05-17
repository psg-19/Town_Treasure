import React from 'react'
import frameImage from '../assets/frame.png'
import logImg  from '../assets/login.png'
import signImg  from '../assets/signup.png'
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import {FcGoogle} from 'react-icons/fc'


export const Template11 = (props) => {
let title= props.title;
let  desc1=props.desc1
let desc2= props.desc2
let image  =props.image
let formtype= props.formtype
let setislogged=  props.setislogged


 
  return (
    <div className={`flex flex-wrap  w-11/12 justify-center gap-x-14 max-w-[1160px] py-12 mx-auto  ${formtype =='login' ? ' all:mt-[0rem] md:mt-[10rem] sm:mt-[25rem] lg:mt-0 gap-y-12 ':'  all:mt-[5rem] sm: '} `}>

       <div className='w-11/12 max-w-[450px] '>
        <h1 className='text-richblack-5 text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span><br />
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>

   {
   
   formtype!== "signup" ? (<LoginForm setislogged={setislogged}/>):(<SignupForm setislogged={setislogged}/>)
   
  }
    

    <div className='flex w-full items-center my-4 gap-x-2'>
        {/* -----line------ */}
        <div className='w-full h-[1px] bg-richblack-700'></div>
        {/* -----or------- */}
        <p className='text-richblack-700 font-medium leading-[1.375rem] '>OR</p>
        {/* -----line------ */}
        <div className='w-full h-[1px] bg-richblack-700'></div>

    </div>


    <button className='w-full flex justify-center items-center 
    rounded-[8px] font-medium text-richblack-100  border border-richblack-700
    px-[12px] py-[8px] gap-x-2 mt-6' >
      <FcGoogle/>
     <p> SignUp with Google</p></button>


        </div> 


<div className=' lg:block md:block sm:block all:hidden relative w-11/12 max-w-[450px]'>
    <img src={frameImage} alt="pattern" height={504}
    width={558} loading='lazy' />

{
  
  formtype!== "signup" ? (<img src={logImg} height={504} width={558}
    alt="students" 
    className='absolute -top-4 right-4'
    />):(<img src={signImg} height={504} width={558}
      alt="students" 
      className='absolute -top-4 right-4'
      />)
}

</div>



    </div>
  )
}


export default Template11