import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Addtodos } from './Components/Addtodos'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Learn Redux Toolkit With Qadir Javed
      <Addtodos />
      <Todos />
    </>
  )
}

export default App
