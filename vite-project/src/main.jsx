import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello from './hello.jsx'

function Neha(){
    return(
<p>hello neha is ! </p>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
<>
{/* All the below is a fuction  */}
<App/>
<Hello/>
<Neha/>
</>

)
