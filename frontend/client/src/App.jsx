import { useState } from 'react'
import Markup from '../Pages/Markup'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
       <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      <Markup/>
    </>
  )
}

export default App
