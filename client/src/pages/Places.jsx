import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import data from '../assets/data2.jsx'
import { useNavigate } from 'react-router-dom'


export const Places = () => {
// console.log(data)
const {district}=useContext(AppContext)
  return (
    <div className='flex flex-col gap-y-8 bg-richblack-800 no-scrollbar  h-[100vh] w-[100vw] text-black mt-[10rem] mb-[2rem]'
    
    >
      
<h1 className='flex items-center justify-center text-4xl  text-white font-bold'>Welcome to {district.name}</h1>

    <div className=' no-scrollbar flex flex-row  justify-center flex-wrap  overflow-y-scroll overflow-x-hidden  no-scrollbar gap-x-6 gap-y-56 '>
       
      
        
        {
            data.map((place)=>{
                
                return <div key={place.id} className='w-[300px]  overscroll-y-auto h-[520px] bg-orange-300 p-4  flex flex-col justify-evenly items-center rounded-lg'  >

<h1 className=' font-bold text-xl'>{place.name}</h1>

<div className='overflow-hidden h-[300px] w-[250px]'>
    <img src={place.image} className='w-[100%] h-[100%] rounded-lg ' alt="" />


</div>
<h6>{place.description.split("").slice(0,150).join("")+' ...'}</h6>


            </div>

            })
        }
        
    </div>

    </div>
  )
}
