import React from 'react'

const LeftContainer = () => {
  return (
    <div className='w-2/5 flex text-white flex-col text-center justify-center gap-y-14 px-20 group'>
      <div className='flex flex-col gap-3'>
        <p>Search your favorite pokemons!</p>
        <span>
          Type the name of the pokemon you would like to see on this list, if
          you dont rembeber here there are some suggestions for you
        </span>
        <ol className='flex flex-wrap gap-3 text-lg group'>
          <span className='border-2 border-solid border-gray-400 rounded-lg px-2 py-1 hover:opacity-100'>
            pikachu
          </span>
          <span className='border-2 border-solid border-gray-400 rounded-lg px-2 py-1 hover:opacity-100'>
            bulbasaur
          </span>
          <span className='border-2 border-solid border-gray-400 rounded-lg px-2 py-1 hover:opacity-100'>
            squirtle
          </span>
          <span className='border-2 border-solid border-gray-400 rounded-lg px-2 py-1 hover:opacity-100'>
            charmander
          </span>
          <span className='border-2 border-solid border-gray-400 rounded-lg px-2 py-1 hover:opacity-100'>
            snorlax
          </span>
          <span className='border-2 border-solid border-gray-400 rounded-lg px-2 py-1 hover:opacity-100'>
            mew
          </span>
        </ol>
      </div>
      <i className='text-8xl fa-solid fa-magnifying-glass group-hover:rotate-12 group-hover:scale-125 duration-700'></i>
    </div>
  )
}

export default LeftContainer
