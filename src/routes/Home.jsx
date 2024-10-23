import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import {expos} from "../data/expos"
import Slider from '../components/Slider'
import MiddleSection from '../components/MiddleSection'

function Home() {
  

  return (
    <div className='bg-gradient-to-r from-purple-200 via-pink-300 to-purple-400 '> 
      <div className='w-screen min-h-screen fixed z-0 flex justify-center 
        pointer-events-none'>
        <div className="absolute inset-0 bg-[url('/grid.svg')] 
        opacity-55"></div>
        <img 
        src='/mesh.svg'
        className='opacity-15 absolute bottom-1 h-[600px] z-10'/>
        <div className='bg-gradient-to-c from-transparent via-transparent
         to-white absolute inset-0 z-20'></div>
    </div>

    <div className='relative z-20 '>
       <NavBar />
      <div className='mx-2 '>
      <HeroSection />

      </div>
      
           <MiddleSection/>
      
      
    </div>
    <div className='mt-40'><Slider images={expos}/></div>
    
      </div>
  )
}

export default Home
