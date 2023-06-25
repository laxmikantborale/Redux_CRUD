import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// link = https://64986b89dd209720f6da64a6--relaxed-strudel-bab1af.netlify.app/
