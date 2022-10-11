import { PokeProvider } from './context/PokeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AppContainer from './components/containers/AppContainer'
import ListScreen from './screens/ListScreen'
import Navbar from './components/Navbar'
import Container from './components/containers/Container'

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
            </Routes>
          </Container>
        </PokeProvider>
      </BrowserRouter>
    </AppContainer>
  )
}

export default App
