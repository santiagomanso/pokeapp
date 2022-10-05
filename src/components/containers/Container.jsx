import React from 'react'

function Container({ children }) {
  return (
    <div className=' bg-gradient-to-br from-indigo-600 to-rose-400 h-full w-full flex justify-center'>
      {children}
    </div>
  )
}

export default Container