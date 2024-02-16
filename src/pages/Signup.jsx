import React from 'react'
import signUpImg from '../assets/signup.png'
import Template11 from '../components/Template11'



export const Signup = ({setislogged}) => {
  return (
    <div>
      
      <Template11
        title="Join Town Treasure today and plan your next trip with us ."
        desc1='Ready For Your Next Adventure !!!!'
        desc2='Here We Come To Hold Your Back ...'
        image={signUpImg}
        formtype='signup'
        setislogged={setislogged}
        ></Template11>

    </div>
  )
}
