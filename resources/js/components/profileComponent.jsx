import React, { useState } from 'react';

const ProfileEditPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    bio: '',
    picture: '',

    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-6 text-center">Edit Profile</h2>
        
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          User Name:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Picture:
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <div>
            
        </div>
        <button
          type="submit"
          className="bg-orange hover:bg-slate-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
        >
            Dicard
        </button>    
        <button
          type="submit"
          className="bg-orange hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
        >
          Save 
        </button>



        
      </form>
      
    </div>




  );
};

export default ProfileEditPage;