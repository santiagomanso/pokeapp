import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = ({ name = '', id = '', type = '', stats = '', height = '' }) => {
  const [bg, setBg] = useState('')
  const [area, setArea] = useState('') //state to store area enconter of pokemon

  useEffect(() => {
    if (id !== '') {
      setArea('')
      const areaEndpoint = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
      getEncounterArea(areaEndpoint)
    }

    if (type) {
      switch (type) {
        case 'psychic': {
          setBg('bg-violet-500/90')
          break
        } //mewtwo
        case 'grass': {
          setBg('bg-emerald-600/90')
          break
        } // chikorita
        case 'electric': {
          setBg('bg-amber-500/90')
          break
        } // pikachu
        case 'fire': {
          setBg('bg-red-500/90')
          break
        } //charizard
        case 'water': {
          setBg('bg-sky-600/90')
          break
        } // lapras
        case 'fighting': {
          setBg('bg-red-800/90')
          break
        } //machamp
        case 'rock': {
          setBg('bg-orange-800/90')
          break
        } //sudowoodo
        case 'normal': {
          setBg('bg-neutral-400/90')
          break
        } // pidgeotto
        case 'bug': {
          setBg('bg-green-500')
          break
        } // caterpie
        case 'fairy': {
          setBg('bg-pink-300/90')
          break
        } // xerneas
        case 'dark': {
          setBg('bg-slate-600/90')
          break
        } // umbreon
        case 'dragon': {
          setBg('bg-indigo-600/90')
          break
        } //dragonite
        case 'flying': {
          setBg('bg-blue-500/90')
          break
        } //
        case 'ghost': {
          setBg('bg-purple-800/90')
          break
        } // gastly
        case 'ground': {
          setBg('bg-yellow-800/90')
          break
        } // dugtrio
        case 'ice': {
          setBg('bg-cyan-200/90')
          break
        } // articuno
        case 'poison': {
          setBg('bg-fuchsia-600/90')
          break
        } // muk
        case 'steel': {
          setBg('bg-slate-300/90')
          break
        } // steelix

        default: {
          break
        }
      }
    } else {
      setBg('transparent') //clear background color when there is no pokemon loaded
    }
  }, [type, id])

  //get area where the pokemon is found based on pokemon ID from the search endpoint
  const getEncounterArea = async (endpoint) => {
    try {
      const { data } = await axios.get(endpoint)
      if (data !== []) {
        setArea(data)
        console.log('data area:', data)
      }
    } catch (error) {
      console.log(error)
      setArea('Pokemon has no encounter area')
    }
  }

  return (
    <div className='card w-full lg:w-5/6 flex border-4 border-gray-800/20 rounded-lg h-[30vh]'>
      <div className='w-full flex flex-col px-4 py-2 gap-2 overflow-auto'>
        <h1>{name}</h1>
        <p>ID: {id}</p>
        <p>{height}0cm</p>
        <p>
          {area.length > 0 ? (
            `found in: ${area[0].location_area.name}`
          ) : (
            <div className='flex items-baseline justify-evenly gap-2 px-2 py-2 bg-red-400 text-red-600 rounded-lg border-2 border-white/50'>
              <i className='fa-solid fa-triangle-exclamation'></i>
              <span className='text-lg'>no encounter area</span>
              <i className='fa-solid fa-triangle-exclamation'></i>
            </div>
          )}
        </p>
      </div>
      <div
        className={`${bg} w-1/2 flex flex-col justify-center gap-5 items-center rounded-lg`}
      >
        <div className=''>{stats}</div>
        {id ? (
          <div className='bg-slate-800/60 h-20 w-20 rounded-full flex justify-center items-center'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              className='h-full w-full scale-[2]'
              alt=''
            />
          </div>
        ) : (
          ''
        )}
        <div className=''>{type}</div>
      </div>
    </div>
  )
}

export default Card
