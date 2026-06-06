import React from 'react'
import { Toaster } from 'react-hot-toast'
import Markup from './Pages/Markup'

function App() {

  return (
    <>
    <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    <Markup />
    </>
  )
}

export default App
