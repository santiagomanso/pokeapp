import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Card from '../Card'

const RightContainer = () => {
  const [pokemon, setPokemon] = useState('')
  const [input, setInput] = useState('')
  const [debouncedText] = useDebounce(input, 1000)

  useEffect(() => {
    if (debouncedText.length > 0) {
      getPokemon()
    }
    //eslint-disable-next-line
  }, [debouncedText])

  const getPokemon = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${debouncedText.toLocaleLowerCase()}`
      )
      console.log('data is: ', data)
      setPokemon(data)
      console.log('type is: ', pokemon.types[0].type.name)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='w-4/6 flex flex-col justify-center items-center text-white/70'>
      <div className='flex flex-col w-full gap-4 items-center '>
        <div className='flex flex-col w-full items-center gap-2'>
          <div className='relative w-5/6 group'>
            <input
              className='w-full rounded-lg px-2 py-3 border-4 border-gray-800/20 bg-transparent text-white/70 focus:text-white/90 focus:bg-black/20 outline-none tracking-wide'
              placeholder='search a pokemon'
              value={input}
              onChange={(e) => handleChange(e)}
            />
            <i className='fa-brands fa-searchengin text-4xl absolute bottom-3 right-2 text-gray-800/20 group-hover:text-white/40'></i>
          </div>
        </div>
        <Card
          name={pokemon.name}
          id={pokemon.id}
          type={pokemon.types[0].type.name}
          stats='15, 20'
          desc='jsajksdfksd jsadhfakj sflas fkhjsaldk falsdfhlaksjdhfjlkashdkjfh'
        />
      </div>
    </div>
  )
}

export default RightContainer
