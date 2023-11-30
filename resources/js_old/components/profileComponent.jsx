import React, { useState } from "react";

const ProfileEditPage = () => {
    const [formData, setFormData] = useState({
        picture: null,
        firstName: "",
        lastName: "",
        userName: "",
        bio: "",
    });

    const handleImageClick = () => {
        document.getElementById("imageInput").click();
    };

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "file" ? e.target.files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
    };

    return (
        <div className=" min-h-screen flex items-center justify-center">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl mb-6 text-center">Edit Profile</h2>

                <div className="flex">
                    <div className="w-1/4  pl-2 ">
                      
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 cursor-pointer relative"
                            onClick={handleImageClick}
                            style={{ position: "relative" }}
                        >
                            {formData.picture ? (
                                <div
                                    className="rounded-full h-16 w-16 cursor-pointer overflow-hidden"
                                    style={{
                                        border: "2px solid #000",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <img
                                        src={URL.createObjectURL(formData.picture)}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div
                                    className="rounded-full h-16 w-16 border border-gray-400 flex items-center justify-center cursor-pointer"
                                    style={{ borderRadius: "50%" }}
                                >
                                    Click to Change
                                </div>
                            )}
                            <input
                                type="file"
                                id="imageInput"
                                name="picture"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </label>
                    </div>

                    <div className="w-3/4 text-start">
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
                    </div>
                </div>

                <div className="ml-44">
                    <button
                        type="submit"
                        className="bg-orange hover:bg-slate-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                    >
                        Discard
                    </button>
                    <button
                        type="submit"
                        className="bg-orange hover:bg-slate-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEditPage;