import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./routes/Login"
import Signup from "./routes/Signup"

const App = () => {
  return (
    
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/loginuser" element={<Login/>}/>
     <Route path="/signupuser" element={<Signup/>}/>
    </Routes>
    
  )
}

export default App