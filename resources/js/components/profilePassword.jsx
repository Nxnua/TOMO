import React, { useState } from "react";

const ChangePasswordPage = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your password change logic here
        console.log("Password change submitted with data:", passwordData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl mb-6 text-center">Change Password</h2>

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Current Password:
                    <input
                        type="password"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    New Password:
                    <input
                        type="password"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>

                <div className="ml-44 flex">
                    <button
                        type="submit"
                        className="bg-orange hover:bg-slate-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline "
                    >
                        Discard
                    </button>
                    <button
                        type="submit"
                        className="bg-orange hover:bg-slate-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline ml-1"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePasswordPage;
