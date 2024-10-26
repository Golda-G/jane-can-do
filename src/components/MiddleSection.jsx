import Mission from "../routes/Mission"

const MiddleSection = () => {
   
  return (
    <section >
     
  <div className="my-10 grid md:grid-rows-6 md:grid-cols-6 text-center text-black md:overflow-x-hidden">

    <div className="lg:mt-2 lg:relative md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-3 md:ml-2"> 
      <div className="rounded-md  border bg-gray-300 border-gray-400 md:rounded-full md:p-16 md:relative md:z-20
      hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h6 className="leading-5">
            Jane Can Do offers a scalable and flexible directory for finding talent but with a unique focus on empowering women (inclusive)
              and gender non-conforming creatives within the Ghanaian and African creative industries.
              <p className="pt-5">
              Join our network, we are creating an online database of African Women creatives, it&apos;s kind of a big deal! 
                </p> 
          </h6>
        </div>
      <div className="hidden lg:block lg:absolute lg:translate-x-2 lg:-translate-y-2 lg:inset-0 lg:z-10 bg-gradient-to-br from-pink-500
       via-violet-300 to-violet-600 lg:rounded-full"></div>
    </div>

    <div className="lg:mr-6 lg:relative lg:col-start-4 lg:col-span-3 md:row-start-3 md:row-span-3 md:mr-2"> 
      <div className="border border-gray-400 bg-gray-300 md:rounded-full md:p-16 md:relative md:z-20 
      hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h6 className="leading-5 font-poppins">
          Jane Can Do is Ghana&apos;s pioneering open directory dedicated to 
          creating visibility and power for women and queer individuals in the creative and cultural economies. 
          <p className="pt-5">
          Our platform is a specialised niche directory that connects companies with a diverse talent pool. 
          </p>
          </h6>
      </div>
      <div className="hidden lg:block lg:absolute md:translate-x-2 md:-translate-y-2 md:inset-0 md:bottom-5 lg:z-10 bg-gradient-to-br from-pink-500
       via-violet-300 to-violet-600 lg:rounded-full"></div>
    </div>

    <button className="h-200 bg-gray-600 border-2 rounded-lg col-start-2 row-start-5">Click here to fill form!</button>
  </div>
       <Mission/>
        
        
    </section>
    
  )
}

export default MiddleSection