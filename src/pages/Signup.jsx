import React from 'react'
import signUpImg from '../assets/signup.png'
import Template11 from '../components/Template11'



export const Signup = ({setislogged}) => {
  return (
    <div>
      
      <Template11
        title="Join the millions learning to code with StudyNotion for free"
        desc1='Build skills for today, tommorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={signUpImg}
        formtype='signup'
        setislogged={setislogged}
        ></Template11>

    </div>
  )
}
