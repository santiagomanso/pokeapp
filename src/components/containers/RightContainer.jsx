const RightContainer = ({ children }) => {
  return (
    <div className='animate__animated animate__fadeIn rightContainer w-full h-full lg:w-4/6 flex flex-col justify-center items-center text-white/70'>
      <div className='flex flex-col w-full h-full gap-8 items-center px-3 lg:px-0'>
        {children}
      </div>
    </div>
  )
}

export default RightContainer
