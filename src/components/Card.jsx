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

className=' flex flex-col w-80  items-center h-[30%] rounded-md bg-white'>

  <div className=' w-[100%] h-[50%] mt-4 flex flex-col items-center justify-center '> <img  className='rounded-sm h-[100%] w-[90%]' src={item.image} alt="" /></div>

<div className='text-black font-extrabold my-4'>{item.name}</div>

   <div className='px-4'>
    <p className='text-black'>{item.description.split("").slice(0,150).join("")+' ...'}</p>
   </div>



    </div>
  )
}
