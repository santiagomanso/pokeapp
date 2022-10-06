import React, { useContext, useState } from 'react'
import { PokeContext } from '../../context/PokeContext'

const LeftContainer = () => {
  const [keyword, setKeyword] = useState('')
  const [search, setSearch] = useContext(PokeContext)

  const handleKeyword = (name) => {
    setSearch(name)
  }

  return (
    <div className='w-2/5 flex text-white flex-col text-center justify-center gap-y-14 px-20 group'>
      <div className='flex flex-col gap-3 select-none'>
        <p>Search your favorite pokemons!</p>
        <span className='text-sm'>
          Type the name of the pokemon you would like to see on this list, if
          you dont remember any pokemons here there are some suggestions for you
        </span>
        <div className='flex flex-wrap gap-3 text-lg group justify-center'>
          <span
            onClick={() => {
              handleKeyword('pikachu')
            }}
            className='border-amber-500/90 text-yellow-400 font-semibold border-2 border-solid rounded-lg px-2 py-1 hover:opacity-100 cursor-pointer'
          >
            pikachu
          </span>
          <span
            onClick={() => {
              handleKeyword('bulbasaur')
            }}
            className='border-green-600 text-green-500 font-semibold border-2 border-solid rounded-lg px-2 py-1 hover:opacity-100 cursor-pointer'
          >
            bulbasaur
          </span>
          <span
            onClick={() => {
              handleKeyword('mew')
            }}
            className='border-purple-800 text-purple-800 font-semibold border-2 border-solid rounded-lg px-2 py-1 hover:opacity-100 cursor-pointer'
          >
            mew
          </span>
          <span
            onClick={() => {
              handleKeyword('squirtle')
            }}
            className='border-blue-500 text-blue-400 shadow-md font-semibold border-2 border-solid rounded-lg px-2 py-1 hover:opacity-100 cursor-pointer'
          >
            squirtle
          </span>
          <span
            onClick={() => {
              handleKeyword('charmander')
            }}
            className='border-orange-500 text-orange-500 shadow-md font-semibold border-2 border-solid rounded-lg px-2 py-1 hover:opacity-100 cursor-pointer'
          >
            charmander
          </span>
          <span
            onClick={() => {
              handleKeyword('snorlax')
            }}
            className='border-neutral-300 text-neutral-300 font-semibold border-2 border-solid rounded-lg px-2 py-1 hover:opacity-100 cursor-pointer'
          >
            snorlax
          </span>
        </div>
      </div>
      <i className='text-8xl fa-solid fa-magnifying-glass group-hover:rotate-12 group-hover:scale-125 duration-700 select-none'></i>
    </div>
  )
}

export default LeftContainer
