import React from 'react'
import frameImage from '../assets/frame.png'
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';



export const Template = (props) => {
let title= props.title;
let  desc1=props.desc1
let desc2= props.desc2
let image  =props.image
let formtype= props.formtype
let setisLoggedIn=  props.setisLoggedIn



  return (
    <div>

       <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

   {
   
   formtype=== "signup" ? (<LoginForm/>):(<SignupForm/>)

   }
    

    <div>
        {/* -----line------ */}
        <div></div>
        {/* -----or------- */}
        <p>OR</p>
        {/* -----line------ */}
        <div></div>

    </div>


    <button>SignUp with Google</button>


        </div> 


<div>
    <img src={frameImage} alt="pattern" height={504}
    width={558} loading='lazy' />

<img src={image} height={490} width={558}
 alt="students" />

</div>

    </div>
  )
}


export default Template