import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  //variables
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleBar = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true)
  }

  return (
    <>
      {/* phone navigation */}
      <div className='bg-white lg:hidden  select-none font-poppins'>
        <div className='text-lg p-3'>
          <Link to='/' className='flex gap-2'>
            <div className='flex gap-1 items-center'>
              <img
                alt='pokeball'
                src='https://img.icons8.com/color/48/000000/pokeball--v1.png'
                className='h-7'
              />
              <span>Poke</span>{' '}
              <span className='font-semibold text-action'>Dex</span>
            </div>
          </Link>
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
            <Link onClick={toggleBar} to='/' className='text-2xl'>
              Home
            </Link>
          </div>
          <div className='flex gap-4 w-1/3'>
            <Link onClick={toggleBar} to='/search' className='text-2xl'>
              Search
            </Link>
          </div>
          <div className='flex gap-4 w-1/3'>
            <Link onClick={toggleBar} to='/' className='text-2xl'>
              List
            </Link>
          </div>
        </div>
      </div>

      {/* PC navigation */}
      <div className='font-poppins hidden lg:flex justify-between px-24 py-4 bg-white shadow-md items-center select-none rounded-t-xl'>
        <div className='flex items-center text-xl group'>
          <Link to='/' className='flex gap-2'>
            <div className='flex gap-1 items-center'>
              <img
                alt='pokeball'
                src='https://img.icons8.com/color/48/000000/pokeball--v1.png'
                className='h-7'
              />
              <span>Poke</span>{' '}
              <span className='font-semibold text-action'>Dex</span>
            </div>
          </Link>
        </div>
        <div className='flex gap-14 text-xl items-center'>
          <Link to='/' className='flex items-center gap-2 group'>
            <span>Search</span>
          </Link>
          <Link to='/list' className='flex items-center gap-2 group'>
            <span>List</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
