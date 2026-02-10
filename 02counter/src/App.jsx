import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[add, setadd]= useState(15);
  // let add =15
   const addvalue = () => {
    console.log('value added', {add})
    setadd(add++);  
   }
   const removevalue = () => 
   {
    setadd(add--)
   }

  return (
    <>
      <h1> React js{add}</h1>
      <h2>Counter value : {add}</h2>
      <button onClick={addvalue}>Add value {add}</button>
      <br/>
      <button onClick={removevalue}>
        Decrease value {add}
      </button>

      
    </>
  )
}

export default App
