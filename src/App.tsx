import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Registration from "./Components/Form"
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
    <Registration></Registration>
    {/* <registration></registration> */}
     {/* <registration></registration> */}
    </>
  )
}

export default App
~