import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter,setCounter] = useState(10)

  const addValue = () => {
    console.log("CLICKED ADD VALUE BUTTON")
    if(counter>=0&&counter<20){
  
      setCounter(counter ++)
      console.log(`Counter value after adding = ${counter}`)
      
    }else{
      console.log(`counter value is not updated because it's value is ${counter}`)
    }
  }
console.log(`COUNTER VALUE : ${counter}`)  
  const removeValue = () =>{
    console.log("removeValue Clicked")
    if(counter>0&&counter<=20)
    {
      setCounter(counter --)
      console.log(`counter value after removing = ${counter}`)
    }
    else{
      console.log(`counter value is not decreased because it's ${counter}`)
    }
  }
  return (
    <>
    <h1>Hi! I AM HAMZA HAQQANI</h1>
    <button onClick={addValue}>Add VALUE : {counter}</button>
    <br />
    <button onClick={removeValue}>Remove VALUE : {counter}</button>
    <p>COUNTER VALUE : {counter}</p>
   
    </>     
  )
}

export default App
