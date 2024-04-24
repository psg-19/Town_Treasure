import React, { useContext } from 'react'

import data from '../assets/data1.jsx'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'


export const States = () => {

    const {setState}=useContext(AppContext)
    // console.log(data)
const navigate=useNavigate()

// 
    const clickHandler =(state)=>{
        setState(state);
        // const x=state.name.split(" ").join('')
        console.log(state,'oooooo')
        navigate(`/state`);
    }

  return (

    <div className='flex flex-col gap-y-8 bg-richblack-800 no-scrollbar  h-[100vh] w-[100vw] text-black mt-[10rem] mb-[2rem]'>
<h1 className='flex items-center justify-center text-4xl  text-white font-bold'>States of India</h1>
    <div className=' no-scrollbar flex flex-row  justify-center flex-wrap  overflow-y-scroll overflow-x-hidden  no-scrollbar gap-x-6 gap-y-56 '>
       
      
        
        {
            data.map((state)=>{
                
                return <div key={state.id}  className='w-[300px]  overscroll-y-auto h-[520px] bg-orange-300 p-4 gap-y-4 flex flex-col justify-center items-center rounded-lg' onClick={()=> clickHandler(state)}>

<h1 className=' font-bold text-xl'>{state.name}</h1>

<div className='overflow-hidden h-[300px] w-[250px]'>
    <img src={state.image} className='w-[100%] h-[100%] rounded-lg ' alt="" />


</div>
<h6>{state.description}</h6>


            </div>

            })
        }
        
    </div>
</div>
  )
}
