import { useEffect, useRef, useState } from "react"
import "../App.css"
import { useCallback } from "react"
function RandomPassGenerator (){
    let[length,setLength]= useState(8)
    let[numberAllowed,setNumberAllowed] = useState(false)
    let[characterAllowed,setCharaterAllowed] = useState(false)
    let[Password,setPassword] = useState("")

    const passRef = useRef(null)

    const passwordGenerator = useCallback(
        () => {
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            if(numberAllowed) str+= "0123456789"
            if(characterAllowed) str+= "!#&'()*+,-./:;<=>?@[^_`{|}"
    
            let pass = ""
            for (let i = 0; i < length; i++) {
    
                let index = Math.floor(Math.random()*str.length+1)
                pass += str.charAt(index) 
            }
            setPassword(pass)
        },[length,numberAllowed,characterAllowed,setPassword]
    )
    const copyPasswordToClipBoard = useCallback(
        () =>{
        passRef.current?.select()
        window.navigator.clipboard.writeText(Password)
        },[Password]
    )
    const showPassword = useEffect(
        ()=>{
            passwordGenerator()
        },{length,numberAllowed,characterAllowed,showPassword}
    )


    return(
           
            <>

        <div className="container">
            <input
             type="text"
             readOnly
            //  ref={passRef}
             className="outline-none "
             placeholder="Password "
            //  value={password}
            />
            <button className="btn btn-primary">Copy</button>
        </div>

            </>
        
    )

}
export default RandomPassGenerator
