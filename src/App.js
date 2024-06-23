import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className='w-full h-screen'style={{backgroundColor: color}}>
      <h1 className='text-red-900'>I am {color}</h1>
      <button onClick={()=> setColor("white")}   style={{backgroundColor: "red", margin: "5px"}}> Set color to white</button>
      <button onClick={()=> setColor("blue")}    style={{backgroundColor: "red", margin: "5px"}}> Set color to blue</button>
      <button onClick={()=> setColor("orange")}  style={{backgroundColor: "red", margin: "5px"}}> Set color to orange</button>
      <button onClick={()=> setColor("yellow")}  style={{backgroundColor: "red", margin: "5px"}}> Set color to yellow</button>
      <button onClick={()=> setColor("black")}  style={{backgroundColor: "red", margin: "5px"}}> Set color to black</button>
    </div>
    </>
  )
  
}

export default App