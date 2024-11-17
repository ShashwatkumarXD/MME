import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../../components/sidebar/LogoutButton';
import '/PROJECTS/chatzone/frontend/src/pages/landingPage/bg.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Navbar from '../landingPage/Navbar';


function Landing() {
  const navigate = useNavigate();
  const [text] = useTypewriter({
    words: [' bit easier.', ' gentle.'],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
  });

  return (
    <div>
      <div>
        <div className="landing-page flex flex-col h-screen">
          <div className='h-24'>
          </div>
          <h1 className="text-7xl font-bold mb-8 z-40 text-white mr-[20%] w-[700px] ml-[150px]">
            Together, we <br /> make motherhood <br /> a
            <span>{text}</span>
            <Cursor />
          </h1>
          <div className='absolute left-[160px] bottom-[170px] circle w-10 h-10 bg-orange-400 rounded-full z-40'></div>
          <a className="cursor-pointer text-lg text-indigo-950 font-bold italic mb-8 z-40 absolute left-[175px] bottom-[145px] hover:scale-105 transform transition-transform duration-300">JOIN US &#x2192;</a>

          <div className='controller fixed bottom-4 left-4'>
            <div className="tooltip tooltip-right tooltip-accent" data-tip="logout">
              <LogoutButton className='text-black' />
            </div>
          </div>

          <div className='theme fixed bottom-4 right-4'>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input type="checkbox" value="synthwave" className="toggle theme-controller" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-[-114px] h-screen flex items-center justify-center bg-white w-full">
        <div className='flex flex-col'>
          <div className='flex flex-row gap-[150px] justify-center'>
            <div className='flex items-end'>
              <a className='text-[#73cdd0] text-[80px] font-bold'>hello</a>
              <a className='text-cyan-800 text-[80px] font-bold'>.</a>
            </div>
            <div className='flex'>
              <a className='text-right text-[35px] font-bold leading-tight text-[#1b7c9a]'>We understand <br /> that motherhood <br /> isn't easy.</a>
            </div>
            <div className=''>
              <a className='text-[#06284c] font-semibold'>We support expecting women with <br />
                expert advice, a supportive community, <br />
                and essential resources to navigate their <br />
                journey with confidence.<br /></a>
              <a href='#' className='underline text-orange-500 font-bold'>ABOUT US</a>
            </div>
          </div>
          {/* <div className='mt-[100px]'>
            <a className='text-[#ef6351] font-bold text-[40px]'>Services we offer</a>
          </div> */}
        </div>
      </div>
      <div className=" h-screen bg-white w-full">
        <div className='flex flex-row'>
          <div className='flex flex-col w-[25%] bg-red-100 h-screen'>
            <div></div>
            <div></div>
          </div>
          <div className='w-[25%] bg-blue-500'>

          </div>
          <div className='w-[25%] bg-green-500'></div>
          <div className='w-[25%] bg-yellow-500'></div>
        </div>
      </div>
      <div className=" h-screen bg-white w-full py-10 px-36">
        <div className='flex flex-col w-full h-full'>
          <div className='flex justify-between items-center w-full h-[10%] px-16'>
            <a className='text-[35px] font-bold text-[#ef6351]'>Check out interesting articles</a>
            <a href='#' className='font-bold underline text-[#ef6351]'>SEE ALL</a>
          </div>
          <div className='flex flex-row  gap-8 h-[90%] w-full mt-6'>
            <div className='w-1/3 h-full p-4'>
              <div className='h-full w-full flex flex-col p-4 gap-3 shadow-md hover:shadow-2xl duration-300'>
                <div className='w-full h-[60%] border-[2px]'>
                </div>
                <div>
                  <a className='text-[20px] leading-none font-bold text-[#73cdd0]'>BuiIding a stronger brana
                    Nith no-code tools</a>
                </div>
                <div>
                  <a className='text-[#89b9c9] font-medium'>Learn about taking on a content design
                    mindset from an expert in brand strategy <br />
                    and content design.</a>
                </div>
                <div>
                  <a href='#' className='text-black font-bold'>READ MORE ➞</a>
                </div>
              </div>
            </div>

            <div className='w-1/3 h-full p-4'>
              <div className='h-full w-full flex flex-col p-4 gap-3 shadow-md hover:shadow-2xl duration-300'>
                <div className='w-full h-[60%] border-[2px]'>
                </div>
                <div>
                  <a className='text-[20px] leading-none font-bold text-[#73cdd0]'>BuiIding a stronger brana
                    Nith no-code tools</a>
                </div>
                <div>
                  <a className='text-[#89b9c9] font-medium'>Learn about taking on a content design
                    mindset from an expert in brand strategy <br />
                    and content design.</a>
                </div>
                <div>
                  <a href='#' className='text-black font-bold'>READ MORE ➞</a>
                </div>
              </div>
            </div>

            <div className='w-1/3 h-full p-4'>
              <div className='h-full w-full flex flex-col p-4 gap-3 shadow-md hover:shadow-2xl duration-300'>
                <div className='w-full h-[60%] border-[2px]'>
                </div>
                <div>
                  <a className='text-[20px] leading-none font-bold text-[#73cdd0]'>BuiIding a stronger brana
                    Nith no-code tools</a>
                </div>
                <div>
                  <a className='text-[#89b9c9] font-medium'>Learn about taking on a content design
                    mindset from an expert in brand strategy <br />
                    and content design.</a>
                </div>
                <div>
                  <a href='#' className='text-black font-bold'>READ MORE ➞</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="h-[500px] bg-gradient-to-b from-[#127090] to-[#072c50] w-full p-14">
        <div className='flex flex-row p-10 h-full w-full'>
          <div className='flex flex-col w-full h-full gap-6'>
            <div className='circle w-10 h-10 bg-orange-400 rounded-full'></div>
            <div className=''>
              <a className='font-bold'>Empowering you through every step of your pregnancy journey with <br /> reliable resources, a supportive community, and expert advice.</a>
            </div>
            <div className="absolute bottom-[-2450px] p-4 w-fit border-2 border-orange-400 text-orange-400 flex items-center gap-4">
              <a href="mailto:shashwat200418@gmail.com" className="font-semibold">
                &#9993;
                shashwat200418@gmail.com
              </a>
            </div>
          </div>
          <div className='flex flex-row justify-center gap-20 w-full'>
            <div>
              <h2 className="text-lg font-bold text-gray-100 mb-4">What We Do</h2>
              <ul className="space-y-2">
                <li><a href="#home" className="text-[#73cdd0] font-semibold hover:underline ">Intro</a></li>
                <li><a href="#home" className="text-[#73cdd0] font-semibold hover:underline">Home</a></li>
                <li><a href="#work" className="text-[#73cdd0] font-semibold hover:underline">Work</a></li>
                <li><a href="#work" className="text-[#73cdd0] font-semibold hover:underline">Pricing</a></li>
                <li><a href="#contact" className="text-[#73cdd0] font-semibold hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-100 mb-4">Who Are We</h2>
              <ul className="space-y-2">
                <li><a href="#home" className="text-[#73cdd0] font-semibold hover:underline">About Us</a></li>
                <li><a href="#work" className="text-[#73cdd0] font-semibold hover:underline">News</a></li>
                <li><a href="#contact" className="text-[#73cdd0] font-semibold hover:underline">Testimonials</a></li>
              </ul>
            </div>
          </div>
          {/* <div className='absolute bottom-[-2600px]'>
            <a>Copyright 0 2024 Motherhood Made Easy All Rights Reserved.</a>
          </div> */}
        </div>
          <div className='flex justify-center items-center'>
            <a className='text-lg font-bold opacity-20'> Copyright © 2024 Motherhood Made Easy All Rights Reserved.</a>
          </div>
      </div>
    </div>
  );
}

export default Landing;