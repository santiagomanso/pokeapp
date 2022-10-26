import React from 'react'

function Container({ children }) {
  return (
    <div className='sombreado bg-gradient-to-br from-indigo-600 to-rose-400 h-full w-full flex flex-col lg:flex-row gap-y-2 lg:gap-y-0  items-centers lg:justify-center rounded-b-xl shadow-md'>
      {children}
    </div>
  )
}

export default Container
