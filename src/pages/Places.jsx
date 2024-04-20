import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import data from '../assets/data2.jsx'
import { useNavigate } from 'react-router-dom'


export const Places = () => {
// console.log(data)
const {district}=useContext(AppContext)
  return (
    <div className='flex flex-col gap-y-8 bg-richblack-800 no-scrollbar  h-[100vh] w-[100vw] text-white mt-[10rem] mb-[2rem]'
    
    >
      
<h1 className='flex items-center justify-center text-4xl font-bold'>Welcome to {district.name}</h1>

    <div className=' no-scrollbar flex flex-row  justify-center flex-wrap  overflow-y-scroll overflow-x-hidden  no-scrollbar gap-x-6 gap-y-56 '>
       
      
        
        {
            data.map((place)=>{
                
                return <div key={place.id} className='w-[300px] h-[520px] bg-orange-400 p-4 gap-y-4 flex flex-col justify-center items-center rounded-lg'  >

<h1>{place.name}</h1>

<div>
    <img src={place.image} alt="" />


</div>
<h6>{place.description}</h6>


            </div>

            })
        }
        
    </div>

    </div>
  )
}
