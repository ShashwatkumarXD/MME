// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logout from '../../components/sidebar/Logout';
// import Chatbox from '../../components/sidebar/Chatbox';

// const Navbar = ({ user }) => {
//   return (
//     <div className="navbar bg-[#ff886a] mt-1">
//       <div className="flex-1 z-40">
//         <a className="btn btn-ghost text-[30px] font-extrabold text-white">MME</a>
//       </div>
//       <div className="flex-none gap-2 z-40">
//         <div className="form-control">
//           <input type="text" placeholder="Search" className="input input-bordered w-16 h-10 md:w-auto md:h-12 p-2" />
//         </div>
//         <div className="dropdown dropdown-end z-40">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               {/* Use dynamic user profile picture */}
//               {user ? (
//                 <img
//                   alt={user.fullName}
//                   src={user.profilePic} // dynamically set the profile picture
//                   className="rounded-full"
//                 />
//               ) : (
//                 <img
//                   alt="Default Avatar"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Fallback if no user
//                   className="rounded-full"
//                 />
//               )}
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li className='text-base'><Link to="/blog">Blog</Link></li>
//             <li><Chatbox /></li>
//             <li><Logout /></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
// import useConversation from '../../zustand/useConversation';
import Logout from '../../components/sidebar/Logout';
import Chatbox from '../../components/sidebar/Chatbox';
import Profile from '../profile/toprofile';
import { useAuthContext } from '../../context/AuthContext';


const Navbar = () => {
  const { authUser } = useAuthContext();
  // const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className="navbar mt-1 p-6">
      {/* <div className="flex-1 z-40">
        <a className="btn btn-ghost text-[30px] font-extrabold text-white">MME</a>
      </div> */}
      <div className="flex-none gap-2 z-40">
        <div className="dropdown z-40 pl-7 pt-2 ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-12 h-12 mt-1 items-center justify-center rounded-full">
              {/* Display user profile dynamically */}
              {authUser ? (
                <img
                  alt={authUser.fullName}
                  src={authUser.profilePic} // dynamically set the profile picture
                  className="rounded-full"
                  title={authUser.fullName}
                />
              ) : (
                // <img
                //   alt="Default Avatar"
                //   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Fallback if no user
                //   className="rounded-full"
                // />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-full h-full"
                >
                  <defs>
                    <style>{".cls-3{fill:#6fabe6}.cls-4{fill:#82bcf4}"}</style>
                  </defs>
                  <g id="User_profile" data-name="User profile">
                    <path
                      d="M47 24A23 23 0 1 1 12.81 3.91 23 23 0 0 1 47 24z"
                      style={{ fill: "#374f68" }}
                    />
                    <path
                      d="M47 24a22.91 22.91 0 0 1-8.81 18.09A22.88 22.88 0 0 1 27 45C5.28 45-4.37 17.34 12.81 3.91A23 23 0 0 1 47 24z"
                      style={{ fill: "#425b72" }}
                    />
                    <path
                      className="cls-3"
                      d="M39.2 35.39a19 19 0 0 1-30.4 0 17 17 0 0 1 10.49-8.73 8.93 8.93 0 0 0 9.42 0 17 17 0 0 1 10.49 8.73z"
                    />
                    <path
                      className="cls-4"
                      d="M39.2 35.39a19 19 0 0 1-4.77 4.49 19 19 0 0 1-15.13-1 7.08 7.08 0 0 1-.51-12.18c.1-.07 0-.05.5-.05a9 9 0 0 0 9.42 0 17 17 0 0 1 10.49 8.74z"
                    />
                    <path
                      className="cls-3"
                      d="M33 19a9 9 0 1 1-12.38-8.34A9 9 0 0 1 33 19z"
                    />
                    <path
                      className="cls-4"
                      d="M33 19a9 9 0 0 1-2.6 6.33c-9.13 3.74-16.59-7.86-9.78-14.67A9 9 0 0 1 33 19z"
                    />
                  </g>
                </svg>
              )}
            </div>
          </div>
          <div className='m'>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li> */}
              {/* <li className='justify-between'><Link to="/profile">Profile</Link></li> */}
              <li className=''><Profile /></li>
              <li className=''><Link to="/blog">Blog</Link></li>
              <li className=''><Chatbox /></li>
              <li className=''><Logout /></li>
            </ul>
          </div>
        </div>
        <div className='absolute right-24'>
          <ul className='flex gap-8 text-indigo-950 font-bold text-[19px] mt-1 italic'>
            <li className='cursor-pointer hover:scale-105 transform transition-transform duration-300'><Link to="/blog">BLOG</Link></li>
            <li className='cursor-pointer hover:scale-105 transform transition-transform duration-300'>FIND HELP</li>
            <li className='cursor-pointer hover:scale-105 transform transition-transform duration-300'><Link to="/consultation">CONSULTATIONS</Link></li>
            <li className='cursor-pointer hover:scale-105 transform transition-transform duration-300'>COMMUNITY</li>
            <li className='cursor-pointer hover:scale-105 transform transition-transform duration-300'><Link to="/landing">ABOUT US</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
