import { useState } from "react"
import { useNavigate } from "react-router-dom"
import janelogo from "../assets/janelogo.png"
import { useScroll, useMotionValueEvent } from "framer-motion"
import MobileMenu from "./MobileMenu"

const NavBar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
        if (latest > 0 && !scrolled) {
            setScrolled(true);
        } else if (latest === 0 && scrolled) {
            setScrolled(false)
        }
    });
   
    const defaultClasses = "transition-all absolute inset-0 -z-1";
    
    let navBarClasses = scrolled ? `${defaultClasses}
    border-b border-black/20 bg-white/5 backdrop-blur-lg` 
    : `${defaultClasses} bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300`;

  return (
    <div className="sticky inset-x-0 top-0 w-full z-30 
    ">
        <div className={navBarClasses}></div>
    <div className="mx-auto w-full max-w-screen-xl
    px-2 lg:px-5 relative">
    <div className="flex items-center 
    justify-between mx-0">
        <div className="mx-0 px-0 ">
            <img
            src={janelogo}
            alt="logo"
            className="sm:w-fit w-30 h-10 mx-0" 
            />
        </div>
        <nav className="hidden md:block"> 
            <ul className="flex flex-row
            space-x-4 p-4">
               
                <li >
                    <a
                    className="text-gray-600 px-20 cursor-default hover:underline"
                    onClick={() =>navigate("/missionandvision")}
                    > 
                    Mission and Vision
                    </a>
                </li>
                <li>
                    <a 
                    className="text-gray-600 cursor-default hover:underline"
                    onClick={() =>navigate("/about")}
                    > 
                    About Us
                    </a>
                </li>
            </ul>
        </nav>
        <div className="hidden md:block">
            <a className="bg-black px-4 py-2 rounded-md text-white cursor-pointer">Login</a>
            <a className="bg-black px-4 py-2 rounded-md text-white cursor-pointer ml-2"> Signup</a>
        </div>
        <MobileMenu/>
    </div>
    </div>
    </div>
    
  )
}

export default NavBar