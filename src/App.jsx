import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './Timer.jsx'
import { TimerProvider } from './TimerContext.jsx'

function App() {
  const words1 = ["apple", "prose", "plank", "river", "heart", "stick", "paint", "joint", "proud", "bread", "carry", "slant", "slide", "snake", "break", "wreck"]
  var randomIndex = Math.floor(Math.random(words1)*(words1.length))
  var randomWord1 = words1[randomIndex]

  return (
    <>
       <section>
          <TimerProvider>
            <Timer/>
          </TimerProvider>
          
          <div>
              <h3>{randomWord1}</h3>
          </div>
          <button onClick={()=>{
            setTimer(t => timer + 5)
            console.log(randomWord1)
          }}>Plus</button>
       </section>
    </>
  )
}

export default App
