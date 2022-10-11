import React, { useContext, useState } from 'react'
import { PokeContext } from '../../context/PokeContext'

const LeftContainer = ({ children }) => {
  return (
    <div className='font-secondary leftContainer w-full lg:w-2/5 flex text-white flex-col text-center  lg:justify-center gap-y-14 lg:px-4 xl:px-10 group'>
      {children}
    </div>
  )
}

export default LeftContainer
