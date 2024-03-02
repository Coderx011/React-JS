import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let obj = {
    user_name:'Ali',
    age:21
  }
  return (
    <>
    <h1 className='bg-green-400 text-black rounded p-5 mb-4'> Tailwind Test</h1>
    <Card username='ali'/>
    <Card/>

    </>
  )
}

export default App
