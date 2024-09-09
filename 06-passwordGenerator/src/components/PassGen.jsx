import React, { useCallback, useEffect, useRef, useState } from "react";
import "../App.css"
function PassGen(){
    
    let[length,setLength]= useState(8)
    let[numberAllowed,setNumberAllowed] = useState(false)
    let[characterAllowed,setCharaterAllowed] = useState(false)
    let[password,setPassword] = useState("")

    const passwordGenerator = useCallback( ()=>{
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str+= "0123456789"
        if(characterAllowed) str+= "!#&'()*+,-./:;<=>?@[^_`{|}"

        let pass = "";
        for (let i = 0; i < length; i++) {
            let index = Math.round(Math.random()*str.length+1)
            let char = str.charAt(index)
            pass += char;
        }

        setPassword(pass)
    },[length,numberAllowed,characterAllowed,setPassword] )


    useEffect(
        ()=>{
            passwordGenerator()
        },[length,numberAllowed,characterAllowed,passwordGenerator]
    )


    const passwordRef = useRef(null)

    const copyPasswordToClipBoard = useCallback( 
        ()=>{
            passwordRef.current?.select()
            window.navigator.clipboard.writeText(password)
        },[password]
    )



    return (
        <>
          <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
            <h1 className="text-white text-center my-3">PASSWORD GENRATOR</h1>
            <div className="flex shadow rounded-ld overflow-hidden mb-4">
              <input
               type="text"
               value={password}
               className='outline-none rounded-lg w-full py-1 px-3'
               placeholder='Password'
               readOnly
               ref={passwordRef}
              />
               <button onClick={copyPasswordToClipBoard} className='bg-blue-800 text-white'>
                copy
              </button>
            </div>
            <div className="flex text-sm gap-x-2">
              <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{(setLength(e.target.value))}}
              />
              <label >length :{length}</label>
    
    
              <div className="flex items-center ap-x-1">
              <input
               type="checkbox"
               defaultChecked={numberAllowed}
               id='numberInput'
               onChange={()=>{
               setNumberAllowed((prev)=>!prev)
               }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center ap-x-1">
              <input
               type="checkbox"
               defaultChecked={characterAllowed}
               id='charInput'
               onChange={()=>{
                setCharaterAllowed((prev)=>!prev)
               }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
    
            </div> 
            
          </div>
        </>
      )
}

export default PassGen