import { useState } from 'react'
import { Header } from './components/Header/Header'
import { BooksList } from './components/BookComponents/BooksList'
import { useGetBooksQuery } from './redux/services/books'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookPage } from './pages/BookPage'

function App() {
  const [category, setCategory] = useState('')
  const [order, setOrder] = useState('relevance')
  const [input, setInput] = useState('')

  const { refetch } = useGetBooksQuery({
    name: input,
    category,
    sort: order,
  })

  function search() {
    refetch()
  }

  // if(isLoading) {
  //   console.log('load')
  // } else if(isError) {
  //   console.log(error)
  // } else if(isSuccess) {
  //   console.log(data)
  // }

  return (
    <BrowserRouter>
      <Header setInput={setInput} setCategory={setCategory} setOrder={setOrder} search={refetch} />
      {/* <BooksList /> */}
      <Routes>
        <Route path='/' element={<BooksList />} />
        <Route path='/:id' element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
