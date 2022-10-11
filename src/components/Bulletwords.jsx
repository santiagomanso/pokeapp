import React from 'react'

//recieves function from parent (homescreen) that modifies context state setSearch based upon what span user cliks
const Bulletwords = ({ handleKeyword }) => {
  return (
    <div className='flex flex-wrap gap-3  group justify-center'>
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
          handleKeyword('charmeleon')
        }}
        className='border-orange-500 text-orange-500 shadow-md font-semibold border-2 border-solid rounded-lg px-2 py-1 hover:opacity-100 cursor-pointer'
      >
        charmeleon
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
  )
}

export default Bulletwords
