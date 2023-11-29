import React from 'react'
import Sidebar from "../components1/Sidebar";
import Navbar from "../components1/Navbar";

export const Logs = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className='flex'>
            Logs
        </div>
      </div>
    </div>
  )
}
