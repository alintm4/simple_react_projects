import { useState } from 'react'

import './App.css'

function App() {
  const[color,setColor]=useState("olive")

  return (
  <div className="w-full h-screen dur-200"
  style={{backgroundColor: color}}>
     {/* <Forcolor /> */}
     <div className="fixed 
     flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2">
      <div className="
     flex flex-wrap justify-center
     gap-3 bg-white px-3 py-2 rounded-xl">
           <button onClick={()=>{
            setColor("red")
           }}
            className="outline-none px-4 "
           style={{backgroundColor: "red"}}
           >Red</button>
           <button onClick={()=>{
            setColor("blue")
           }} className="outline-none px-4 "
           style={{backgroundColor: "blue", color:"white"}}
           >Blue</button>
           <button onClick={()=>{
            setColor("green")
           }} className="outline-none px-4 "
           style={{backgroundColor: "green"}}
           >Green</button>
           <button onClick={()=>{
            setColor("orange")
           }} className="outline-none px-4 "
           style={{backgroundColor: "orange"}}
           >Orange</button>
      </div>
     </div>
     </div>
  )
}

export default App
