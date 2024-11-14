import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./components/Home"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Mission from "./routes/Mission"

const App = () => {
  return (
    <div>
       <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/loginuser" element={<Login/>}/>
     <Route path="/signupuser" element={<Signup/>}/>
     <Route path="/missionandvision" element={<Mission/>}/>
     
    </Routes>
    <ToastContainer/>
    </div>
    
   
    
  )
}

export default App