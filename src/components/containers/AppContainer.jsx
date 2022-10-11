import React from 'react'

const AppContainer = ({ children }) => {
  return (
    <div className='app h-screen w-[100vw] flex justify-center  lg:pt-20'>
      <img
        src='https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png'
        alt='bg'
        className='absolute bottom-0 right-0 z-0'
      />
      <div className='h-full lg:h-3/4  w-full lg:w-3/4  lg:rounded-xl z-10 opacity-100'>
        {children}
      </div>
    </div>
  )
}

export default AppContainer
