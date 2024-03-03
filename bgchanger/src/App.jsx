import { useState } from "react"

function App() {
  const [color, setcolor] = useState('')

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>

        <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button onClick={( )=> setcolor('red')} className="outline-none py-1 px-4 text-white rounded-full" style={{backgroundColor: 'red'}}>Red</button>
          <button onClick={( )=> setcolor('green')} className="outline-none py-1 px-4 text-white rounded-full" style={{backgroundColor: 'green'}}>Green</button>
          <button onClick={( )=> setcolor('blue')} className="outline-none py-1 px-4 text-white rounded-full" style={{backgroundColor: 'blue'}}>blue</button>
          <button onClick={( )=> setcolor('black')} className="outline-none py-1 px-4 text-white rounded-full" style={{backgroundColor: 'black'}}>black</button>
          <button onClick={( )=> setcolor('Purple')} className="outline-none py-1 px-4 text-white rounded-full" style={{backgroundColor: 'Purple'}}>Purple</button>
          <button onClick={( )=> setcolor('orange')} className="outline-none py-1 px-4 text-white rounded-full" style={{backgroundColor: 'orange'}}>orange</button>
          <button onClick={( )=> setcolor('pink')} className="outline-none py-1 px-4 text-white rounded-full" style={{backgroundColor: 'pink'}}>Pink</button>
          <button onClick={( )=> setcolor('gray')} className="outline-none py-1 px-4 text-white rounded-full" style={{backgroundColor: 'gray'}}>gray</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
