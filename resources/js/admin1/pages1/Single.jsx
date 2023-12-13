import Sidebar from "../components1/Sidebar";
import Navbar from "../components1/Navbar";
import { useState } from 'react';

const Single = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: 99884433 },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: 99887766 },
    // Add more user data as needed
  ])
  const [gudes, setGudes] = useState([
    { id: 1, name: 'gundalai', email: 'gundalai@example.com', phone :77889911 , address:'UB'},
    { id: 2, name: 'gundalai1', email: 'gundalai1@example.com', phone: 11223344, address:'darhan'},
    // Add more user data as needed
  ])
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="flex gap-5 p-5">
          <div className="flex-1 shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] relative p-5 webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
            <h1 className="text-base text-[lightgray] mb-5 ">USERS</h1>
            <hr className="h-0 border-[0.5px] border-solid border-[rbg(230,227,227)]"/>
            <div className="bg-white p-4 rounded-md shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-left divide-gray-200">
                  {users.map(users => (
                    <tr key={users.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{users.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{users.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{users.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{users.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] mx-5 my-2.5 p-5 webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47)">
        <h1 className="text-base text-[lightgray] mb-5">GUIDES</h1>
        <hr className="h-0 border-[0.5px] border-solid border-[rbg(230,227,227)]"/>
        <div className="bg-white p-4 rounded-md shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">address</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-left divide-gray-200">
                  {gudes.map(gudes => (
                    <tr key={gudes.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{gudes.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{gudes.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{gudes.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{gudes.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{gudes.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
