import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter = 6
  // 6 is default value 
  // setCounter means new value for the update 
   let [counter , setCounter] = useState(6)
   
 const addValue = ()=>{
 
    if (counter > 5){
      counter = 0
    }
    setCounter(counter+1)
    
 }
 const removeValue = () =>{
   if (counter < 0){
    counter = 0
   }
 
    setCounter(counter-1)
   
    
 }
 // when click then it will execute for this not use parenthesis 
 //else execute only once
  return (
    <>
      <h1>Count the Value</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue} > Add Value </button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
