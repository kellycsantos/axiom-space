
import './App.scss'
import Navbar from './components/Navbar'
import Discover from './pages/Discover'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import Reliable from './pages/Reliable'
import YourWay from './pages/YourWay'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <OurServices />
        <YourWay />
        <Discover />
        <Reliable />
      </main>
      <Footer/>
    </>
  )
}

export default App
