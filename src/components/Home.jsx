import NavBar from './NavBar'
import HeroSection from './HeroSection'
import {expos} from "../data/expos"
import Slider from './Slider'
import MiddleSection from './MiddleSection'

function Home() {
  

  return (
    <div className='bg-gradient-to-r from-purple-100 via-pink-200 to-purple-300 '> 
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
