<div className="landing-page flex flex-col h-[600px] w-screen">
      <div className='h-32 '>
      </div>
      <h1 className="text-7xl font-bold mb-8 z-40 text-white ml-[150px] mr-[20%]">Together, we {<br/>} make motherhood {<br/>} a
        <span>{text}</span>
        <Cursor />
      </h1>
      <div className='absolute left-[140px] bottom-[180px] circle w-10 h-10 bg-orange-400 rounded-full z-40'></div>
      <a className="cursor-pointer text-lg text-black font-medium mb-8 z-40 absolute left-[155px] bottom-[155px] hover:scale-105 transform transition-transform duration-300">JOIN US &#x2192;</a>
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
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
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