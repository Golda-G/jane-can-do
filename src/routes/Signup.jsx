import { useState, } from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate} from 'react-router-dom';

const Signup = () => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

    const handleRegister = (e) => {
      e.preventDefault();
  
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch ((error) => {
        console.log(error)
  });
  navigate("/");
  
  };

return (
  <>
<div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleRegister}>
    <div className="mb-4">

      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email Address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
     onChange={(e) => setEmail(e.target.value)} type="email" value={email} placeholder="Email"/>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    
    <div className="flex items-center justify-between">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign Up
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
 
</div>
</>
)
}

export default Signup