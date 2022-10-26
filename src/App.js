import { PokeProvider } from './context/PokeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AppContainer from './components/containers/AppContainer'

import Navbar from './components/Navbar'
import Container from './components/containers/Container'
import ListScreen from './screens/ListScreen'
import DetailsScreen from './screens/DetailsScreen'

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <PokeProvider>
          <Navbar />
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/list' element={<ListScreen />} />
              <Route path='/details/:id' element={<DetailsScreen />} />
            </Routes>
          </Container>
        </PokeProvider>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
