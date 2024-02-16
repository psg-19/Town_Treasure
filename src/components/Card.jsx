import React from 'react'


export const Card = ({item}) => {
    // console.log(data)
  return (
    <div className=' flex flex-col w-80  items-center h-[30%] rounded-md bg-white'>

  <div className=' w-[100%] h-[50%] mt-4 flex flex-col items-center justify-center '> <img  className='rounded-sm h-[100%] w-[90%]' src={item.image} alt="" /></div>

<div className='text-black font-extrabold my-4'>{item.name}</div>

   <div className='px-4'>
    <p className='text-black'>{item.description.split("").slice(0,150).join("")+' ...'}</p>
   </div>



    </div>
  )
}
