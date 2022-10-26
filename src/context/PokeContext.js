import { createContext, useState } from 'react'

export const PokeContext = createContext()

export const PokeProvider = (props) => {
  const [search, setSearch] = useState('') //to get clicked pokemon and later search them

  return (
    <PokeContext.Provider value={[search, setSearch]}>
      {props.children}
    </PokeContext.Provider>
  )
}
