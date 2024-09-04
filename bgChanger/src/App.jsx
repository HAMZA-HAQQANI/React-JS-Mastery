import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full  h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 gap-3 shadow-lg bg-green px-3 py-2 rounded-3xl">
          <button onClick={()=>(setColor('green'))} className="outline-none px-4 py1 rounded-full text-white" style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={()=>(setColor('green'))} className="outline-none px-4 py1 rounded-full text-white" style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={()=>(setColor('green'))} className="outline-none px-4 py1 rounded-full text-white" style={{backgroundColor:"blue"}}>
            Blue
          </button>
        </div>
      </div>
    </>
  )
}

export default App
