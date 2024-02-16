import React from 'react'
import Template11 from '../components/Template11'
import logInImg from '../assets/login.png'


export const Login = ({setislogged}) => {
  return (
    <div>

        <Template11
        title="Welcome Back"
        desc1='Ready For Your Next Adventure !!!!'
        desc2='Here We Come To Hold Your Back ...'
        image={logInImg}
        formtype='login'
        setislogged={setislogged}
        ></Template11>

    </div>
  )
}
