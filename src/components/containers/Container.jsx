import React from 'react'

function Container({ children }) {
  return (
    <div className='sombreado bg-gradient-to-br from-indigo-600 to-rose-400 h-full w-full flex flex-col pt-5 lg:pt-0 gap-y-10 lg:gap-y-0 lg:flex-row items-centers lg:justify-center rounded-b-xl shadow-md'>
      {children}
    </div>
  )
}

export default Container
