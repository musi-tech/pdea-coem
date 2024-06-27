import React from 'react';

const messages = [
  {
    id: 1, // Unique identifier for each message
    name: "Shri. Ajit Pawar",
    image: require("../../assets/images/Presedent.jpg"), // Replace with your principal's image path
    position: "President",
    message: "Our vision is based on hard work, open communication, a strong emphasis on teamwork and a high level of responsibility. This visionary culture allows and emphasizes our wards not only to adopt the present...",
  },
  {
    id: 2, // Unique identifier for each message
    name: "Dr. R. V. Patil",
    image: require("../../assets/images/Principal.jpg"), // Replace with your president's image path
    position: "Principal",
    message: "It is my immense pleasure to welcome you to the creative world of Engineering. PDEA's College of Engineering, Manjari (Bk) at Pune, is a prominent engineering education center, located in the heart ...",
  },
];

const MessageCard = ({ name, image, position, message }) => (
  <div className="message-card bg-gray-100 flex flex-col md:flex-row md:items-center md:gap-4 rounded-lg shadow-md overflow-hidden">
    <img className="message-card-image fill object-cover h-full w-full md:w-1/3" src={image} alt={`${name} - ${position}`} />
    <div className="message-card-content p-4 flex flex-col space-y-2">
      <h4 className="text-lg font-semibold text-gray-800">{position}</h4>
      <h3>{name}</h3>
      <p className="text-gray-600">{message}</p>
      <span className="text-blue-500 hover:underline cursor-pointer">Read more</span>
    </div>
  </div>
);

const MsgCard = () => (
  <div className="message-container grid grid-cols-1 my-10 mx-10 md: md:grid-cols-2 gap-5 justify-items-center ">
    {messages.map((messageData) => (
      <MessageCard key={messageData.id} {...messageData} />
    ))}
  </div>
);

export default MsgCard;
