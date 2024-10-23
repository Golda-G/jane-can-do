import Mission from "../routes/Mission"

const MiddleSection = () => {
   
  return (
    <section >
     
  <div className="my-10 grid grid-rows-6 grid-cols-6 text-center text-black overflow-x-hidden">

    <div className="relative col-start-1 col-span-3 row-start-1 row-span-3 ml-2"> 
      <div className="border border-gray-400 bg-gray-300 rounded-full p-16 relative z-20
      hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h6 className="leading-5">
            Jane Can Do offers a scalable and flexible directory for finding talent but with a unique focus on empowering women (inclusive)
              and gender non-conforming creatives within the Ghanaian and African creative industries.
              <p className="pt-5">
              Join our network, we are creating an online database of African Women creatives, it&apos;s kind of a big deal! 
                </p> 
          </h6>
        </div>
      <div className="absolute translate-x-2 -translate-y-2 inset-0 z-10 bg-gradient-to-br from-pink-500
       via-violet-300 to-violet-600 rounded-full"></div>
    </div>

    <div className="relative col-start-4 col-span-3 row-start-3 row-span-3 mr-2"> 
      <div className="border border-gray-400 bg-gray-300 rounded-full p-16 relative z-20 
      hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h6 className="leading-5 font-poppins">
          Jane Can Do is Ghana&apos;s pioneering open directory dedicated to 
          creating visibility and power for women and queer individuals in the creative and cultural economies. 
          <p className="pt-5">
          Our platform is a specialised niche directory that connects companies with a diverse talent pool. 
          </p>
          </h6>
      </div>
      <div className="absolute translate-x-2 -translate-y-2 inset-0 bottom-5 z-10 bg-gradient-to-br from-pink-500
       via-violet-300 to-violet-600 rounded-full"></div>
    </div>

    <button className="h-200 bg-gray-600 border-2 rounded-lg col-start-2 row-start-5">Click here to fill form!</button>
  </div>
       <Mission/>
        
        
    </section>
    
  )
}

export default MiddleSection