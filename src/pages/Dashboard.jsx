import React from 'react'
import { Card } from '../components/Card'
import data from '../assets/data'


export const Dashboard = () => {
  return (
    <div className='flex text-white justify-center items-center  flex-col'>
     <p className='uppercase text-6xl my-4 mb-7'> Welcome to TOWN TREASURE</p>

     <div className='flex flex-row w-[70%] my-10 gap-y-[2%] justify-evenly flex-wrap'>

     {
     data.map((item)=>{
      return <Card item={item}/>
     })
     }
     </div>



    </div>
  )
}

export default Dashboard