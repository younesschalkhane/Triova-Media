import { useState } from 'react'
import Markup from '../Pages/Markup'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Markup/>
    </>
  )
}

export default App
