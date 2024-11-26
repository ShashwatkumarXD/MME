import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from '../../components/sidebar/Logout';
import Profile from '../profile/toprofile';
import { useAuthContext } from '../../context/AuthContext';
import ChatBot from '../../components/chatbotify/chatbotify';
// import ChatBot from "react-chatbotify";

const Navbar = () => {


  const { authUser } = useAuthContext();
  const [isChatVisible, setIsChatVisible] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === '/home';
  const isFindPage = location.pathname === '/findhelp';

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div className={`navbar relative mt-1 ${isHomePage || isFindPage ? 'p-3' : 'p-6'
      } transition-all duration-300`}>
      <div className="flex-none gap-2 z-40">
        <div className="dropdown z-40 pl-7 pt-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-12 h-12 mt-1 items-center justify-center rounded-full">
              {/* Display user profile dynamically */}
              {authUser ? (
                <img
                  alt={authUser.fullName}
                  src={authUser.profilePic}
                  className="rounded-full"
                  title={authUser.fullName}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-full h-full"
                >
                  <g id="User_profile" data-name="User profile">
                    <path
                      d="M47 24A23 23 0 1 1 12.81 3.91 23 23 0 0 1 47 24z"
                      style={{ fill: "#374f68" }}
                    />
                  </g>
                </svg>
              )}
            </div>
          </div>
          <div className="m">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="">
                <Profile />
              </li>
              <li className="">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="">
                <Logout />
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute right-24">
          <ul className="flex gap-8 text-indigo-950 font-bold text-[19px] mt-1 italic">
            <li className="cursor-pointer hover:scale-105 transform transition-transform duration-300">
              <Link to="/blog">BLOG</Link>
            </li>
            <li className="cursor-pointer hover:scale-105 transform transition-transform duration-300">
              <Link to="/findhelp">FIND HELP</Link>
            </li>
            <li
              className="cursor-pointer hover:scale-105 transform transition-transform duration-300"
              onClick={toggleChat}
            >
              CONSULTATIONS
            </li>
            <li className="cursor-pointer hover:scale-105 transform transition-transform duration-300">
              <Link to="/home">COMMUNITY</Link>
            </li>
            <li className="cursor-pointer hover:scale-105 transform transition-transform duration-300">
              <Link to="/landing">ABOUT US</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Chatbot */}
      {isChatVisible && (
        <div
          className="fixed  h-24 right-0 bottom-7 w-80 transition-transform transform z-30">
          <div className="p-4">
            <ChatBot />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
