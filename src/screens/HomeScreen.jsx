import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Bulletwords from '../components/Bulletwords'
import Card from '../components/Card'

import LeftContainer from '../components/containers/LeftContainer'
import RightContainer from '../components/containers/RightContainer'

import { PokeContext } from '../context/PokeContext'

const HomeScreen = () => {
  const [pokemon, setPokemon] = useState('') //state to store current pokemon
  const [input, setInput] = useState('') //state that is going to recieve what the user types on the input
  const [debouncedText] = useDebounce(input, 1000) //this hook prevents the triggering of multiples queries to the endpoint
  const [search, setSearch] = useContext(PokeContext) //search that comes from keywords and from context

  useEffect(() => {
    if (search !== '') {
      setInput(search)
    }

    if (debouncedText.length > 0) {
      getPokemon()
    }
    //eslint-disable-next-line
  }, [debouncedText, search]) //useEffect will listen to changes in those variables / states and trigger itself

  const getPokemon = async () => {
    console.log('peticion GET')
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${debouncedText.toLocaleLowerCase()}` //debounced txt here to prevent multiples queries to endpoint
      )
      console.log('data is: ', data)
      setPokemon(data)
    } catch (error) {
      console.log(error)
    }
  }

  //this is meant to allow user to overwrite input that he had prevously clicked with keywords, now after reset user can type and search a pokemon
  const handleReset = () => {
    setSearch('')
  }

  //store what user types on the input during onChange event.
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleKeyword = (name) => {
    setSearch(name)
  }
  return (
    <>
      <LeftContainer>
        <div className='animate__animated animate__fadeIn flex flex-col gap-3 select-none'>
          <p>Search your favorite pokemons!</p>
          <span className=' px-2 lg:px-0'>
            Type the name of the pokemon you would like to see on this list, if
            you dont remember any pokemons here there are some suggestions for
            you
          </span>
          <Bulletwords handleKeyword={handleKeyword} />
        </div>
        <i className=' fa-solid text-center fa-magnifying-glass group-hover:rotate-12 group-hover:scale-125 duration-700 select-none'></i>
      </LeftContainer>
      <RightContainer>
        <div className=' flex flex-col w-full h-full justify-start lg:justify-center items-center gap-10 select-none'>
          <div className=' relative w-full  lg:w-5/6 group'>
            <input
              className='w-full  rounded-lg px-2 py-4 md:py-3 border-4 border-gray-800/20 bg-transparent text-white/70 outline-none tracking-wide'
              placeholder='or type here to search a pokemon'
              value={input}
              onClick={handleReset}
              onChange={(e) => handleChange(e)}
            />
            <i className='fa-brands fa-searchengin flex text-4xl absolute bottom-3 right-2 text-gray-800/20 group-hover:text-white/40'></i>
          </div>
          {pokemon ? (
            <Card
              name={pokemon.name}
              id={pokemon.id}
              type={pokemon.types[0].type.name}
              stats='15, 20'
              height={pokemon.height}
            />
          ) : (
            <Card /> //is there is no pokemon an empty card will be rendered to mantein aspect of the flex-col items-center on this right container
          )}{' '}
        </div>
      </RightContainer>
    </>
  )
}

export default HomeScreen
