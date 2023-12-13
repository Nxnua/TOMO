// Sample data for notifications
const notifications = [
  {
    id: 1,
    userName: 'John Doe',
    description: 'Liked your post',
    image: "/images/manzushir.png", // URL to user's image
    icon: "",
  },
  {
    id: 2,
    userName: 'Alice Smith',
    description: 'Commented on your photo',
    image: "/images/manzushir.png",// URL to user's image
    icon: "",
  },
  // Add more notifications as needed
];

// Notification component
const Notification = ({ userName, description, image }) => {
  return (
    <div className="flex items-center bg-gray-100 p-4 rounded-md shadow mb-4">
      <img
        src={image}
        alt={`${userName}'s avatar`}
        className="rounded-full w-12 h-12 mr-4"
      />
      <div>
        <p className="font-bold">{userName}</p>
        <p className="text-slate-400">{description}</p>
      </div>
      
    </div>
  );
};

// NotificationPage component
const NotificationPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Notifications</h1>
      <div>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            userName={notification.userName}
            description={notification.description}
            image={notification.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
