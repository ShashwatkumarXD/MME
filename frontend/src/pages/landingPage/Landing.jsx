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
          <div className='flex flex-col w-[25%] h-screen justify-center items-center'>
            <div className='w-full h-1/2 p-1'>
              <img src='https://s3-alpha-sig.figma.com/img/770a/510b/3eabdea40f01c606dd8e5d2153f0bdda?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyCUm00XnNzd8WxXJHksy1k54n6I1jkm2Ja12enU7mHdy~QQylnzBgpo8KinK9kWFoxsw~nFy4QB~BrgLwX913wyJyQDph3ug04wsy1MuaSJQfmyOxdNVx1lErpDGDfIZPdv82j0oSZUHuKizfh8UaZXlklwU6kJg2tJg0sKfShNXsWWoU-~3exD-vkcxo42RPpuxC2TM~jy~0DLFP1LuyiU~ft3toIKyRNsvzpm0VaZuHN6j2aRy01lHnuwVswTzQPyycSF7pUb6K8KEvaVAsq9J9jzbS5VmdeDCcJ9K8pqPxTBfnUpNURLRGzjwQYH3gHPEdjcseL~PgYDIk~-RQ__' className=''></img>
            </div>
            <div className='w-full h-1/2 p-1'>
              <img src='https://s3-alpha-sig.figma.com/img/397d/149b/3f0078f11d40a683b616362b4120b719?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPHXsmWpKJ~EJZa08Y0zcGY2TeJv4wsQrh9WeSVAImAw9Q00CYwTywspkfAoqZ7Ly7scPre4zir26Oj9lgkcA3mspCAdUqiky4CVt~CRwh-v~UhFQsrcizoczjCx5ytyvAvllpTJCidSK~qy2H5yBL087WOhGtipOUwdNfytn9wZDdUs3BvsMp3XtQidPkE-pkhTMc1Mi4sE5iCDUGdj3OvU3vuviyyXdUg53HDrnCMxD-BAfqVs1e4r~dWD1J9JFUL93dViPBAusDDoiqg5YG-qs~T7MmSfbgEG8ulfrm-fBr4G~gdSIQ9T2Nu~wX8yKeKGmRl6Y4trLutUthSrEA__' className='h-full w-full'></img>
            </div>
          </div>
          <div className='w-[25%] bg-cover bg-center'>
            <img src='https://s3-alpha-sig.figma.com/img/e4e0/752a/ee44acdf8d243fd78d5fed68a30f7f05?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oj5OAqBQNZ7rpZ-8yZHWEcYr-SOe3nlJR1y0bczU6VZfWnyzBTeLuzXg7Stw8ICpaD~3uUJ1iPR30G4geXQCpsDTcNfb40vmaqBWD4cnep0aB-qn-mU2nL6-CqpjLlE11t6hijl4aO9-SDn8CWxmQFdrH9CFxflVbWMWKboAOJHJW0gxVC1iNzcFH~OrckO80bX-pWP5byChMVZyr~w5OGU8twkMDVnso8I7nwN8qamA9W5sMw9HlGVfiNQgCtQmY3mMxWwvOBwJiSzVRiUtvJFNPHRxQLVq-17jSIjn89phEV03EYgLSqzGurYXdK4fWnQCOpPahdhFIAvSLuOl4Q__' className='p-1 h-full'></img>
          </div>
          <div className='w-[25%] bg-green-500'></div>
          <div className='w-[25%] bg-yellow-500'></div>
        </div>
      </div>
      <div className=" h-screen bg-white w-full py-10 px-36">
        <div className='flex flex-col w-full h-full'>
          <div className='flex justify-between items-center w-full h-[10%] px-16'>
            <a className='text-[35px] font-bold text-[#ef6351]'>Check out interesting articles</a>
            <a href='https://evidencebasedbirth.com/' className='font-bold underline text-[#ef6351]'>SEE ALL</a>
          </div>
          <div className='flex flex-row  gap-8 h-[90%] w-full mt-6'>
            <div className='w-1/3 h-full p-4'>
              <div className='h-full w-full flex flex-col p-4 gap-3 shadow-md hover:shadow-2xl duration-300'>
                <div className='w-full h-[60%] border-[2px]'>
                  <img src='/1image.jpg'
                  className='w-full h-full'>
                  </img>
                </div>
                <div>
                  <a className='text-[20px] leading-none font-bold text-[#73cdd0]'>Painless Birth and Pain Perception During Childbirth</a>
                </div>
                <div>
                  <a className='text-[#89b9c9] font-medium'>Labor pain perception is shaped by psychological, environmental, and social factors, affecting satisfaction and pain relief.</a>
                </div>
                <div>
                  <a href='https://evidencebasedbirth.com/painless-birth-pain-perception-childbirth/' className='text-black font-bold'>READ MORE ➞</a>
                </div>
              </div>
            </div>

            <div className='w-1/3 h-full p-4'>
              <div className='h-full w-full flex flex-col p-4 gap-3 shadow-md hover:shadow-2xl duration-300'>
                <div className='w-full h-[60%] border-[2px]'>
                  <img src='/3image.png'
                  className='w-full h-full'></img>
                </div>
                <div>
                  <a className='text-[20px] leading-none font-bold text-[#73cdd0]'>Massage for pain relief during labor</a>
                </div>
                <div>
                  <a className='text-[#89b9c9] font-medium'>Massage during labor may reduce pain and improve comfort, with trial evidence supporting its benefits.</a>
                </div>
                <div>
                  <a href='https://evidencebasedbirth.com/massage-for-pain-relief-during-labor/' className='text-black font-bold'>READ MORE ➞</a>
                </div>
              </div>
            </div>

            <div className='w-1/3 h-full p-4'>
              <div className='h-full w-full flex flex-col p-4 gap-3 shadow-md hover:shadow-2xl duration-300'>
                <div className='w-full h-[60%] border-[2px]'>
                  <img src='/4image.jpg' className='w-full h-full'></img>
                </div>
                <div>
                  <a className='text-[20px] leading-none font-bold text-[#73cdd0]'>A Positive Hospital Waterbirth Story</a>
                </div>
                <div>
                  <a className='text-[#89b9c9] font-medium'>Katrina Hull shares her empowering hospital waterbirth story, highlighting her preparation through the EBB childbirth class and overcoming complications.</a>
                </div>
                <div>
                  <a href='https://evidencebasedbirth.com/ebb-287-a-positive-hospital-waterbirth-story-with-ebb-childbirth-class-graduate-katrina-hull/' className='text-black font-bold'>READ MORE ➞</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="h-[500px] bg-gradient-to-b from-[#127090] to-[#072c50] w-full p-14">
        <div className='flex flex-row p-10 h-full w-full'>
          <div className='flex flex-col w-full h-full gap-6'>
            <div className='circle w-14 h-14 bg-orange-400 rounded-full'>
            <img src="/logo2.png" className='rounded-full w-14 h-14' alt="logo" />
            </div>
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