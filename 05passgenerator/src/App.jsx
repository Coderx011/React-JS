import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

const [length, setlength] = useState(8)
const [numberAllowed , setnumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [password, setpassword] = useState("")

const passwordref = useRef(null)

const passwordGenertor = useCallback(()=>{
  let pass = " "
  let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%^&*(){}~`[]/\/+_-"

  for (let i = 0; i <=length; i++) {
    let char = Math.floor(Math.random( ) * str.length + 1)  
    
    pass += str.charAt(char)
  }

  setpassword(pass)


},[length,numberAllowed,charAllowed])

useEffect(()=>{
  passwordGenertor()
}, [length,numberAllowed,charAllowed,passwordGenertor])

const copypassword = useEffect(()=>{
  passwordref.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])
  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 m-8 text-orange-500 bg-gray-700'>
    <h1 className='text-center my-3'>Password Genertor</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value = {password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordref}
      />
      <button onClick={copypassword
      } className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 transition-all delay-75'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label htmlFor="">Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input 
        type="checkbox" 
        defaultChecked={numberAllowed}
       id='numberId'
        className='cursor-pointer'
        onChange={(e)=>{setnumberAllowed((prev) => !prev)}}
        />
        <label htmlFor="numberId">Number</label>
      </div>

      <div className='flex items-center gap-x-1'>
      <input 
        type="checkbox" 
        defaultChecked={charAllowed}
       id='charId'
        className='cursor-pointer'
        onChange={(e)=>{setCharAllowed((prev) => !prev)}}
        />
        <label htmlFor="charId">Character</label>
      </div>
    </div>

  </div>
    </>
  )
}

export default App
