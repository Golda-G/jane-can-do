import Mission from "../routes/Mission"

const MiddleSection = () => {
   
  return (
    <section >
     
  <div className=" my-10 grid grid-cols-2 grid-rows-2 gap-4 text-center text-black md:overflow-x-hidden">

    <div className="md:mt-20 md:relative md:col-start-1 md:row-start-1 md:ml-5"> 
      <div className="px-5 rounded-lg border bg-indigo-300 bg-opacity-35 
      border-gray-400 md:rounded-full md:p-16 md:relative md:z-20 md:pt-50
      hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:translate-x-2">
      <p className="leading-8 font-poppins">
            Jane Can Do offers a scalable and flexible directory for finding talent but with a unique focus on empowering women (inclusive)
              and gender non-conforming creatives within the Ghanaian and African creative industries.    
          </p>
        </div>
      <div className="hidden md:ml-4 md:pt-10 md:block md:absolute md:translate-x-4 md:translate-y-1 md:inset-8 md:z-0 bg-gradient-to-br from-pink-500
       via-violet-300 to-violet-600 md:rounded-full"></div>
    </div>

     <div className="md:ml-5 bg-gradient-to-tr from-indigo-300/60 via-cyan-100/75 to-purple-300/75
               rounded-tl-full rounded-br-full flex justify-center items-center col-start-1 row-start-2 text-wrap">
       <p className="px-20">
          Join our network, we are creating an online database of African Women creatives, it&apos;s kind of a big deal! 
        </p> 
      </div>

    <div className="mr-3 md:mt-20 md:relative md:col-start-2 md:row-start-2 md:mr-5"> 
      <div className="rounded-lg border bg-indigo-300 bg-opacity-35 
      border-gray-400 md:rounded-full md:p-16 md:relative md:z-20 md:pt-50
      hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h6 className="leading-8 font-poppins">
          Jane Can Do is Ghana&apos;s pioneering open directory dedicated to 
          creating visibility and power for women and queer individuals in the creative and cultural economies. 
          </h6>
      </div>
      <div className="hidden md:pt-10 md:mb-3 md:block md:absolute md:inset-10 md:z-2 md:-translate-y-2 md:translate-x-4 bg-gradient-to-br from-pink-500
       via-violet-300 to-violet-600 md:rounded-full"></div>
    </div>


      <div className="md:ml-5 bg-gradient-to-tr from-indigo-300 via-cyan-100 to-purple-300 bg-transparent 
               rounded-tl-full rounded-br-full flex justify-center items-center text-wrap md:mr-5 bg-opacity-15 col-start-2 row-start-1">
       <p className="px-20">
          Our platform is a specialised niche directory that connects companies with a diverse talent pool. 
          </p>
      </div>
    

    <button className="h-200 bg-gray-600 border-2 rounded-lg col-start-2 row-start-5">Click here to fill form!</button>
  </div>
       <Mission/>
        
        
    </section>
    
  )
}

export default MiddleSection