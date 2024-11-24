// import React, { useState } from "react";
// import ChatBot from "react-chatbotify";
// // import "react-chatbotify/dist/index.css";

// const Consultation = () => {
//   const [isChatVisible, setIsChatVisible] = useState(false);

//   const flow = {
//     start: {
//       message: "Hello! How can I assist you with consultations?",
//     },
//   };

//   const toggleChat = () => {
//     setIsChatVisible(!isChatVisible);
//   };

//   return (
//     <div className="relative h-screen bg-gray-100 p-4">
//       {/* Header or Navigation */}
//       <ul className="flex space-x-4 p-4 bg-white shadow-md">
//         <li
//           className="cursor-pointer hover:scale-105 transform transition-transform duration-300"
//           onClick={toggleChat}
//         >
//           CONSULTATIONS
//         </li>
//       </ul>

//       {/* Content */}
//       <div className="mt-10 text-center">
//         <h1 className="text-2xl font-semibold">Consultation Page</h1>
//         <p className="text-gray-600 mt-2">
//           Click on "CONSULTATIONS" to open the chatbot for assistance.
//         </p>
//       </div>

//       {/* Chatbot Container */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-lg transform transition-transform duration-300 ${
//           isChatVisible ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <button
//           className="absolute top-2 left-2 bg-red-500 text-white rounded-full p-2"
//           onClick={toggleChat}
//         >
//           ✕
//         </button>
//         <ChatBot flow={flow} />
//       </div>
//     </div>
//   );
// };

// export default Consultation;
