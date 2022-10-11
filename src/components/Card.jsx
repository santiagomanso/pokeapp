import axios from 'axios'
import React, { useEffect, useState } from 'react'
import pokeball from '../assets/pokebola-blanca.png'

const Card = ({ name = '', id = '', type = '', stats = '', height = '' }) => {
  const [img, setImg] = useState('')
  const [bg, setBg] = useState('')
  const [gradient, setGradient] = useState('')
  const [txt, setTxt] = useState('')
  const [icon, setIcon] = useState('')
  const [area, setArea] = useState('') //state to store area enconter of pokemon

  useEffect(() => {
    if (id !== '') {
      const areaEndpoint = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
      getEncounterArea(areaEndpoint)
      setImg(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      )
    }

    if (type) {
      switch (type) {
        //mewtwo
        case 'psychic': {
          setBg('bg-gradient-to-tr from-zinc-900/80 to-violet-800/80')
          setTxt('text-violet-500/90')
          setIcon('fa-solid fa-brain')
          setGradient('bg-gradient-to-tl from-zinc-900/80 to-violet-800/80')
          break
        }
        // chikorita
        case 'grass': {
          setBg('bg-gradient-to-tr from-green-500/70 to-emerald-900/80')
          setTxt('text-emerald-600/90')
          setIcon('fa-solid fa-leaf')
          setGradient('bg-gradient-to-tl from-green-500/70 to-emerald-900/80')
          break
        }
        // pikachu
        case 'electric': {
          setBg('bg-gradient-to-tr from-amber-600/90 to-stone-900')
          setTxt('text-amber-700')
          setIcon('fa-solid fa-bolt')
          setGradient('bg-gradient-to-tl from-amber-600/90 to-stone-900')
          break
        }
        //charizard
        case 'fire': {
          setBg('bg-gradient-to-tr from-red-600/70 to-zinc-800')
          setTxt('text-red-500/90')
          setIcon('fa-solid fa-fire')
          setGradient('bg-gradient-to-tl from-red-600/70 to-zinc-800')
          break
        }
        // lapras
        case 'water': {
          setBg('bg-gradient-to-tr from-blue-600/90 to-slate-800')
          setTxt('text-sky-600/90')
          setIcon('fa-solid fa-droplet')
          setGradient('bg-gradient-to-tl from-blue-600/90 to-slate-800')
          break
        } //machamp
        case 'fighting': {
          setBg('bg-gradient-to-tr to-neutral-900/90 from-cyan-700/50')
          setTxt('text-zinc-700/90')
          setIcon('fa-solid fa-hand-fist')
          setGradient('bg-gradient-to-tl to-neutral-900/90 from-cyan-700/50')
          break
        } //sudowoodo
        case 'rock': {
          setBg('bg-gradient-to-tr from-yellow-800/80 to-stone-900/80')
          setTxt('text-orange-800/90')
          setIcon('fa-solid fa-cubes')
          setGradient('bg-gradient-to-tl from-yellow-800/80 to-stone-900/80')
          break
        } //snowlax
        case 'normal': {
          setBg('bg-gradient-to-tr from-stone-500/90 to-zinc-900/80')
          setTxt('text-neutral-500')
          setIcon('fa-solid fa-shield-halved')
          setGradient('bg-gradient-to-tl from-stone-500/90 to-zinc-900/80')
          break
        } // caterpie
        case 'bug': {
          setBg('bg-gradient-to-tr from-teal-500/90 to-neutral-900')
          setTxt('text-green-900')
          setIcon('fa-solid fa-bug')
          setGradient('bg-gradient-to-tl from-teal-500/90 to-neutral-900')
          break
        } // clefairy
        case 'fairy': {
          setBg('bg-gradient-to-tr to-slate-900/70 from-pink-300/40')
          setTxt('text-pink-700')
          setIcon('fa-brands fa-studiovinari')
          setGradient('bg-gradient-to-tl to-slate-900/70 from-pink-300/40')
          break
        } // umbreon
        case 'dark': {
          setBg('bg-gradient-to-tr from-gray-600/90 to-slate-900')
          setTxt('text-slate-700')
          setIcon('fa-solid fa-moon')
          setGradient('bg-gradient-to-tl from-gray-600/90 to-slate-900')
          break
        } // dragonite
        case 'dragon': {
          setBg('bg-indigo-600/90')
          setTxt('text-indigo-600/90')
          setIcon('fa-solid fa-dragon')
          setGradient('bg-gradient-to-br from-emerald-500/70 to-blue-800/80')
          break
        } //Corviknight
        case 'flying': {
          setBg('bg-blue-500/90')
          setTxt('text-blue-500/90')
          setIcon('fa-solid fa-plane')
          setGradient('bg-gradient-to-br from-emerald-500/70 to-blue-800/80')
          break
        } //gastly
        case 'ghost': {
          setBg('bg-purple-800/90')
          setTxt('text-purple-800/90')
          setIcon('fa-solid fa-ghost')
          setGradient('bg-gradient-to-br from-emerald-500/70 to-blue-800/80')
          break
        } // dugtrio
        case 'ground': {
          setBg('bg-yellow-800/90')
          setTxt('text-yellow-800/90')
          setIcon('fa-solid fa-earth-americas')
          setGradient('bg-gradient-to-br from-emerald-500/70 to-blue-800/80')
          break
        } // articuno
        case 'ice': {
          setBg('bg-cyan-400/90')
          setTxt('text-sky-500')
          setIcon('fa-solid fa-snowflake')
          setGradient('bg-gradient-to-br from-emerald-500/70 to-blue-800/80')
          break
        } // muk
        case 'poison': {
          setBg('bg-fuchsia-600/90')
          setTxt('text-fuchsia-600/90')
          setIcon('fa-solid fa-skull')
          setGradient('bg-gradient-to-br from-emerald-500/70 to-blue-800/80')
          break
        } // Steelix
        case 'steel': {
          setBg('bg-slate-300/90')
          setTxt('text-slate-300/90')
          setIcon('fa-solid fa-cube')
          setGradient('bg-gradient-to-br from-emerald-500/70 to-blue-800/80')
          break
        }

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
    <div
      className={`${gradient} font-primary card w-full lg:w-5/6 flex border-4 border-gray-800/20 rounded-lg h-[30vh]`}
    >
      {id ? (
        <div className='flex w-full'>
          <div
            className={` w-full rounded-lg flex flex-col px-4 py-2 gap-2 overflow-auto`}
          >
            <p className='self-center'>{name}</p>
            <p>#{id}</p>
            <p>{height}0cm</p>
            {area.length > 0 ? (
              <p>found in: {area[0].location_area.name}</p>
            ) : (
              <div className='w-full h-full flex items-center justify-center'>
                <div className='select-none animate-bounce flex gap-2 items-baseline px-4 py-2 bg-red-400 text-red-800/70 rounded-lg border-2 border-white/50'>
                  <i className='fa-solid fa-triangle-exclamation text-2xl'></i>
                  <span className='text-2xl'>no encounter area</span>
                  <i className='fa-solid fa-triangle-exclamation text-2xl'></i>
                </div>
              </div>
            )}
          </div>
          <div
            className={`select-none relative card-stats w-1/2 flex flex-col justify-center gap-5 items-center rounded-lg`}
          >
            <img src={img} alt='poke' className='z-10 absolute h-full' />

            <img
              src={pokeball}
              alt='poke'
              className='h-full w-full opacity-70'
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Card
