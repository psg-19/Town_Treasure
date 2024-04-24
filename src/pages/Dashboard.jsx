import React, { useContext } from 'react'
import { Card } from '../components/Card'
import data from '../assets/data'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'


export const Dashboard = () => {
  const{state}=useContext(AppContext)
  const navigate=useNavigate();
  // const {state,setDistrict}=useContext(AppContext);

  return (
    <div className='flex text-white justify-center items-center  flex-col'>
     <p className='uppercase text-6xl my-4 mb-7'> Welcome to TOWN {state.name}</p>

     <div className='flex gap-y-8 flex-row w-[70%] my-10  justify-evenly flex-wrap'>

     {
     data.map((item)=>{
      return <Card item={item} />
     })
     }
     </div>



    </div>
  )
}

export default Dashboard