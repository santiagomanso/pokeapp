const LeftContainer = ({ children }) => {
  return (
    <div className='font-secondary leftContainer w-full lg:w-2/5 flex text-white flex-col   lg:justify-center gap-y-14 px-2 sm:px-6 lg:px-4 xl:px-10 group'>
      <div className='animate__animated animate__fadeIn flex flex-col gap-8 select-none'>
        {children}
      </div>
    </div>
  )
}

export default LeftContainer
