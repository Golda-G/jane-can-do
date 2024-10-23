import workericon from "../assets/workingwoman.png";
import Tag from "./Tag";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="text-center mt-28 flex flex-col">
      <Tag>
        <div className="flex items-center cursor-pointer">
          <span>Directory</span>
          <ChevronRight className="w-6 h-6 ml-1 text-indigo-300"/>
        </div>
      </Tag>
        <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl"
        >Jane Can Do
            <br />
            <span className="font-semibold italic bg-gradient-to-r from-purple-600 via-purple-800
             to-purple-950 bg-clip-text text-transparent text-4xl" >
                Ghana&apos;s first open directory for women and queer people in the creative and cultural industries
                </span>
       </h1>

       <h2 className="mt-5 text-gray-600 sm:text-xl">
        A Black Book for Ghanaian Women and Queer Creatives
       </h2>
       <div className="mx-auto mt-5 flex max-w-fit space-x-4">
        <a href="get-started"
        className="rounded-full mx-auto max-w-fit border px-5 py-2 
        text-sm font-medium shadow-sm border-black bg-black text-white
        hover:ring-gray-400 hover:ring-2"
        >
            Get Started
        </a>
        <a href="Expos"
         className="rounded-full mx-auto max-w-fit border px-5 py-2 
         text-sm font-medium shadow-sm border-gray-300 bg-white text-black
         hover:ring-gray-400 hover:ring-2"
        >
            Our Events
        </a>
       </div>
       <div className="mt-5 items-center justify-center">
        <img
           src={workericon}
           alt="icon"
           className="mx-auto max-h-[300px] sm:max-h-[500px]"
        />

       </div>
       
    </section>
  )
}

export default HeroSection