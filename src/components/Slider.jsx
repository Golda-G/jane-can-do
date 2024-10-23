import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Slider = ({images}) => {
    const imagesArr = [...images, ...images];
    return (
        <div className="h-[200px] relative rounded-md overflow-hidden mx-0 max-w-screen-xl">
            <div className="absolute inset-0 z-20 before:absolute before:left-0 
            before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r
             before:from-white before:to-transparent after:absolute after:right-0
             after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l
             after:from-white after:to-transparent "></div>
            <motion.div 
              className="flex" 
              animate={{
                x:["0%", "-100%"],
                transition:{
                    ease:"linear",
                    duration: 15,
                    repeat: Infinity,
                },
            }}
            >
              {imagesArr.map((image, index) => (
                <div 
                key={index} 
                className="h-full flex-shrink-0"
                >
              <div className="flex items-center justify-center h-[200px]">
                    <img 
                    src={image.logo} 
                    alt={image.event} 
                    className="h-full opacity-75 object-contain max-w-full"/>
                 </div>
                    
            </div>
           
          ))}
            </motion.div>
            
        </div>
    );
    
};

export default Slider