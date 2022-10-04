import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  //variables
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleBar = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true)
  }

  return (
    <>
      {/* phone navigation */}
      <div className='lg:hidden  select-none bg-slate-100 font-poppins'>
        <div className='flex items-center gap-2 text-lg p-3'>
          <a href='/' className=''>
            <span>Poke</span>{' '}
            <span className='font-semibold text-action'>App</span>
          </a>
        </div>
        {showSidebar ? (
          <button
            className='flex text-5xl text-white items-center cursor-pointer fixed right-6 -top-1 z-50'
            onClick={toggleBar}
          >
            x
          </button>
        ) : (
          <svg
            onClick={toggleBar}
            className='fixed  z-30 flex items-center cursor-pointer right-5 top-3'
            viewBox='0 0 100 80'
            width='30'
            height='30'
          >
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        )}

        <div
          className={`top-0 right-0 w-[100vw] bg-black/90
                  text-white fixed h-full z-40  ease-in-out duration-300
                  flex flex-col justify-start items-center
                  pt-20 gap-20
        ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'}`}
        >
          <div className='flex gap-4 w-1/3'>
            <a onClick={toggleBar} href='/' className='text-2xl'>
              Home
            </a>
          </div>
          <div className='flex gap-4 w-1/3'>
            <a onClick={toggleBar} href='/search' className='text-2xl'>
              Search
            </a>
          </div>
          <div className='flex gap-4 w-1/3'>
            <a onClick={toggleBar} href='/' className='text-2xl'>
              List
            </a>
          </div>
          <div className='flex gap-4 w-1/3'>
            <a onClick={toggleBar} href='/new' className='text-2xl'>
              Create Pokemon
            </a>
          </div>
        </div>
      </div>

      {/* PC navigation */}
      <div className='font-poppins hidden lg:flex justify-between px-24 py-4 bg-neutral-100/90 shadow-md items-center select-none'>
        <div className='flex items-center gap-2 text-xl group'>
          <a href='/' className='text-xl'>
            Poke <span className='text-action font-semibold'>App</span>
          </a>
        </div>
        <div className='flex gap-14 text-xl items-center'>
          <a href='/search' className='flex items-center gap-2 group'>
            <span>Search</span>
          </a>
          <a href='/' className='flex items-center gap-2 group'>
            <span>List</span>
          </a>
          <a href='/new' className='flex items-center gap-2 group'>
            <span>Create Pokemon</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
