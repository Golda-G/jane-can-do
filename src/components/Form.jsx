import { useState } from "react"

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  return (
    <div className=" border-2 border-gray-500 rounded-lg">
          <label htmlFor='name'>Full Name</label>
        <input 
        className="w-4/5 mx-5 my-5 border-gray-500 border-2 h-10"
          type="text"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          placeholder='Enter Your Full Name'
          required
        />
        <div>
          <label htmlFor='email'>Email Address </label>
          <input 
           onChange={(e)=>setEmail(e.target.value)}
           value={email}
           type="email"
           placeholder='Enter Your Email Address'
           required
          />
          
        </div>
        </div>
  )
}

export default Form