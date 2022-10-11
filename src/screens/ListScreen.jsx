import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const ListScreen = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      )
      setPokemons(data)
    }

    getPokemons()
  }, [])

  return <Card />
}

export default ListScreen
