import React from 'react'
import image from '../assets/home_page.png'
import './Home.css'
import AutoTypeText from './AutoTypeText'

export const Home = () => {
  return (
    <div className='mt-4 p-9 box-border overflow-hidden  flex flex-col text-white w-screen justify-center items-center h-[100vh] '>
<div className='mb-4 mt-6  '>

<p className=' text-8xl decoration-solid'>TOWN TREASURE</p>

</div>
      
      {/* --------------------------TOWN TREASURES---------------------------------- */}


      {/* ----------------------IMAGE----------------------- */}
   <div className='relative w-[80%] '>
   
        <img src={image} className='border h-[90%] w-[100%] -z-10 rounded-xl' alt="Home Page" />
      

      <div className='text-richblack-700 font-extrabold text-7xl absolute uppercase top-[19%]
      left-20
      '>
        <p className=''>Explore the world 
        <br/> with us</p>
        </div>


   </div>

   {/* <div className=' text-8xl decoration-solid'>ARE YOU READY ?</div> */}

    </div>
  )
}
