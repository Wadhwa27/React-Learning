import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/card"

// we are using jsx neither proper html nor js for this we use jsx so
//  some thing is different here
//  img tag is also closing tag
function App() {
  
  let details = {
    name : "Neha",
    Age : 22
  }
  let arr = [1,34,67]
  return (
   <>
   <h1 className = "bg-blue-300 text-black p-4 rounded-xl mb-4"> Learning Tailwind </h1>
   <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/18374442/pexels-photo-18374442/free-photo-of-flag-and-street-light-over-narrow-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

    
 <Card username = "Neha"   myDetails= {details}  arr={arr}/>
 <Card username = "Wadhwa" btnText = "click me "/>
<br/>


   </>
  )
}

export default App
