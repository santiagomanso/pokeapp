import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailsScreen = () => {
  const { id } = useParams()
  const [img, setImg] = useState('')
  useEffect(() => {
    setImg(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    )
  }, [id])

  const getImg = () => {}

  return (
    <section className='w-full h-full bg-red-500 flex flex-col items-center justify-center'>
      <div className='h-1/3 w-full bg-green-300 flex flex-col items-center justify-between rounded-b-full md:rounded-b-none relative'>
        <div className='bg-amber-400 h-60 lg:h-44 w-60 lg:w-44 rounded-full flex justify-center items-center'>
          <img src={img} alt='pokemon' />
        </div>
        <h1 className='absolute bottom-0 translate-y-2'>nombre {id}</h1>
      </div>
      <div className='h-2/3 w-full bg-indigo-300'>swiper</div>
    </section>
  )
}

export default DetailsScreen
