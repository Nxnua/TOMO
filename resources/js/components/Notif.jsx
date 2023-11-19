import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const notificationsData = [
    {
        id: 1,
        person: "John Doe",
        title: "New Message",
        description: "You have a new message from John. ",
        icon: "📩",
        isNew: true, // flag to indicate if it's unread
    },
    {
        id: 2,
        person: "Jane Smith",
        title: "New Like",
        description: "Jane liked your post.",
        icon: "👍",
        isNew: false,
    },
    // Add more notifications as needed
];

const Navbar = ({ unreadCount }) => {
    return (
        <nav className=" ">
            <div>
                <Header/>
            </div>
            <div className=" ml-14  justify-start mt-20 h-12    w-full    ]">
                <div className="flex mt-2 justify-start md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto">
                    <div className="stroke" id="mainNav">
                        <ul>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">Notifiction</a>
                            </li>
                            <li>
                                <a href="#">Favorite</a>
                            </li>
                            <li>
                                <a href="#">Reviewed</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ml-[75px] w-11/12 h-10 flex items-center gap-10  mb-4 border-[1px] ">
                <div className="  font-bold">
                    Sort by:
                </div>
                <div className="flex gap-10 ">
                    <button>
                        Newest
                    </button>
                    <button>
                        Unread
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NotificationPage = () => {
    return (
        <div className="">
            <Navbar
                unreadCount={
                    notificationsData.filter((notif) => notif.isNew).length
                }
            />
            <div className=" ml-[75px] w-11/12 container mx-auto  bg-slate-100">
                <div className="grid grid-cols-1 gap-4">
                    {notificationsData.map((notification) => (
                        <div
                            key={notification.id}
                            className="bg-white rounded-lg p-4 shadow-md flex items-center"
                        >
                            <div className="mr-4">{notification.icon}</div>
                            <div>
                                <div className="font-bold">
                                    {notification.person}
                                </div>
                                <div>{notification.title}</div>
                                <div className="text-sm text-gray-600">
                                    {notification.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;

