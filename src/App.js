import Navbar from './components/Navbar'
import Container from './components/containers/Container'
import RightContainer from './components/containers/RightContainer'
import LeftContainer from './components/containers/LeftContainer'
import { PokeProvider } from './context/PokeContext'

function App() {
  return (
    <PokeProvider>
      <div className='text-2xl h-screen w-[100vw] flex justify-center pt-20'>
        <img
          src='https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png'
          alt='bg'
          className='absolute bottom-0 right-0 z-0'
        />
        <div className='h-3/4 w-3/4 bg-white/70 rounded-xl z-10 opacity-80'>
          <Navbar />
          <div className='relative h-full w-full'>
            {' '}
            {/* este div necesita altura y anchura definidas para que swiper se alimente */}
            <Container>
              <LeftContainer />
              <RightContainer />
            </Container>
          </div>
        </div>
      </div>
    </PokeProvider>
  )
}

export default App
