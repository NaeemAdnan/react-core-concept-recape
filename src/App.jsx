import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './assets/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h3>React core concept recape</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Even Handler</li>
        <li>Sta</li>
        <li>Load Data</li>

      </ol>
      <hr />
      <Post></Post>

    
    </>
  )
}

export default App
