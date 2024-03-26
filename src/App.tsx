import { useState } from 'react'

import './App.css'
import { Header } from './components/Header/Header'
import { BooksList } from './components/BookComponents/BooksList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BooksList />
    </>
  )
}

export default App
