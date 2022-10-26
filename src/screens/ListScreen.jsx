import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Card from '../components/Card'
import LeftContainer from '../components/containers/LeftContainer'
import RightContainer from '../components/containers/RightContainer'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Pagination } from 'swiper'

const ListScreen = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokeId, setPokeId] = useState({
    id: '',
  })
  const [option, setOption] = useState({
    filter: 'all pokemons',
  })

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0'
      )
      setPokemons(data.results)
      // pokemons.map((poke) => {
      //   const urlParts = poke.url.split('/')
      //   const id = urlParts[urlParts.length - 2] //here i extract just the position (index) of the ID of the array created by split method
      //   console.log(id)
      //   return setPokeId((current) => [...current, id]) //here i want to acumulate all of
      // })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <LeftContainer>
        <p>Pokemon Lists</p>
        <span className=''>
          Here you will find lists of pokemons, swipe from right to left to see
          more pokemons!
        </span>
        <span>
          PS: you can also change what type of list you want to see below!
        </span>
        <div className='select-none flex flex-row lg:flex-col gap-5 justify-evenly'>
          <label
            htmlFor='checked-toggle2'
            className='select-none inline-flex relative items-center cursor-pointer md:w-[20%] lg:w-[70%]'
            onClick={() => setOption({ filter: 'all pokemons' })}
          >
            <input
              type='checkbox'
              value=''
              id='checked-toggle2'
              className='sr-only peer h-44'
            />
            <div
              className="w-12 h-7  bg-gray-200 rounded-full peer peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
              after:content-[''] after:absolute lg:after:top-0.2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:bottom-[0.3rem] lg:after:bottom-[0.4rem] after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
            ></div>
            <span className='ml-3 dark:text-gray-30'>All pokemons!</span>
          </label>
          <label
            htmlFor='checked-toggle'
            className='select-none inline-flex relative items-center cursor-pointer md:w-[20%] lg:w-[70%]'
            onClick={() => setOption({ filter: 'filter by type' })}
          >
            <input
              type='checkbox'
              value=''
              id='checked-toggle'
              className='sr-only peer h-44'
            />
            <div
              className="w-12 h-7  bg-gray-200 rounded-full peer peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
              after:content-[''] after:absolute lg:after:top-0.2 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:bottom-[0.3rem] lg:after:bottom-[0.4rem] after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
            ></div>
            <span className='ml-3 dark:text-gray-30'>Sort by type</span>
          </label>
        </div>

        <i className='hidden lg:block fa-solid fa-list-ul text-center group-hover:rotate-12 group-hover:translate-y-1 duration-700 select-none'></i>
      </LeftContainer>
      <RightContainer>
        <div className='h-full w-full select-none overflow-auto '>
          {pokemons
            ? pokemons.map((poke, i) => <Card key={i} name={poke.name} />)
            : ''}
        </div>
      </RightContainer>
    </>
  )
}

export default ListScreen
