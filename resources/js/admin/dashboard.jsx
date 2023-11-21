import React from 'react'
import { FaEnvelope,FaRegBell, FaSearch } from 'react-icons/fa'


const Dashboard = () => {
  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
          <div className='flex items-center rounded-[5px]'>
            <input type="text" className='bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for...' />
            <div className='bg-yellow-400 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
              <FaSearch color='white'/>
            </div>
          </div>
          <div className='flex items-center gap-[15px] relative'>
            <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
              <FaRegBell/>
              <FaEnvelope/>
            </div>
            <img src="/images/profile.jpg" alt="image description" className='rounded-full w-10 h-10 x-[15px] flex items-center justify-center hover:opacity-80 border-b-[1px] border-[#ededed]/[0.3]' />
            <div>Gundalai gang</div>
            
          </div>
    </div>
    
  )
}


export default Dashboard