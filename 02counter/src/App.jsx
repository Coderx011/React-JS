import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count ,setcount] = useState(15)

const addValue = ()=>{
  if(count == 20){
    count = 20
    document.querySelector('.plus').style.opacity = '0.4'
  }else{
    document.querySelector('.minus').style.opacity = '1'
    count = count+1;
    setcount(count)
  }
    
}
const removeValue = ()=>{
  if(count < 1 ){
    count = 0
    document.querySelector('.minus').style.opacity = '0.4'
  }else{
    document.querySelector('.plus').style.opacity = '1'
  count = count-1;
  setcount(count)
  }
}

  return (
    <>
      
      <h1>MY first project code</h1>
     <h2>Counter value: {count}</h2>

     <button className='plus' onClick={addValue}>add Value{count}</button>
     <br />
     <button className='minus' onClick={removeValue}>Remove Value{count}</button>
    </>
  )
}

export default App
