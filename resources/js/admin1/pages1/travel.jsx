import React from 'react'
import Sidebar from "../components1/Sidebar";
import Navbar from "../components1/Navbar";
import { useState } from 'react';

export const Travel = () => {
  const [travel, setUsers] = useState([
    { id: 1, name: 'Terelj' },
    { id: 2, name: 'Darhan' },
    // Add more user data as needed
  ])
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className='flex'>
        <div className="flex-1 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] relative p-5 webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
            <h1 className="text-base text-[lightgray] mb-5 ">Travel</h1>
            <hr className="h-0 border-[0.5px] border-solid border-[rbg(230,227,227)]"/>
            <div className="bg-white p-4 rounded-md shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-left divide-gray-200">
                  {travel.map(travel => (
                    <tr key={travel.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{travel.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{travel.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}