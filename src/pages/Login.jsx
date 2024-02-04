import React from 'react'
import Template11 from '../components/Template11'
import logInImg from '../assets/login.png'


export const Login = ({setislogged}) => {
  return (
    <div>

        <Template11
        title="Welcome Back"
        desc1='Build skills for today, tommorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={logInImg}
        formtype='login'
        setislogged={setislogged}
        ></Template11>

    </div>
  )
}
