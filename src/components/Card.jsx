import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';


export const Card = ({item}) => {
    // console.log(data)
    const {setDistrict}=useContext(AppContext)
   const navigate=useNavigate()
  return (

    <div onClick={()=> {

      // console.log('hiiii')
      setDistrict(item)
navigate('/district')}} 

className=' flex flex-col  w-[300px]  overscroll-y-auto h-[540px] items-center gap-y-4  rounded-md bg-white'>

<div className='overflow-hidden h-[300px] mt-4 w-[250px]'>
    <img src={item.image} className='w-[100%] h-[100%] rounded-lg ' alt="" />


</div>

<div className='text-black font-extrabold my-4'>{item.name}</div>

   <div className='px-4'>
    <p className='text-black'>{item.description.split("").slice(0,150).join("")+' ...'}</p>
   </div>



    </div>
  )
}
