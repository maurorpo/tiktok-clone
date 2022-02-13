import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import VideoPlayer from './components/VideoPlayer/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <VideoPlayer />
      </main>
    </div>
  )
}

export default App
