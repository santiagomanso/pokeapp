import { createContext, useState } from 'react'

export const PokeContext = createContext()

export const PokeProvider = (props) => {
  const [search, setSearch] = useState('')

  return (
    <PokeContext.Provider value={[search, setSearch]}>
      {props.children}
    </PokeContext.Provider>
  )
}
