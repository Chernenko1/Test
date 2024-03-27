import { useState } from 'react'
import { Header } from './components/Header/Header'
import { BooksList } from './components/BookComponents/BooksList'
import { useGetBooksQuery } from './redux/services/books'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookPage } from './pages/BookPage'
import { useAppSelector } from './redux/hooks'

function App() {
  const [category, setCategory] = useState('')
  const [order, setOrder] = useState('relevance')
  const [input, setInput] = useState('')
  const [searchData, setSearchData] = useState({ name: '', category: '', sort: 'relevance', startIndex: 0 })

  const { isLoading, isError, error, isSuccess } = useGetBooksQuery(searchData)

  const books = useAppSelector((state) => state.books.books)

  function search() {
    setSearchData({ category, name: input, sort: order, startIndex: 0 })
  }

  function loadMore() {
    console.log(1)
    setSearchData({ category, name: input, sort: order, startIndex: books.length + 1 })
  }

  return (
    <BrowserRouter>
      <Header setInput={setInput} setCategory={setCategory} setOrder={setOrder} search={search} isLoad={isLoading} />
      <Routes>
        <Route path='/' element={<BooksList isLoading={isLoading} load={loadMore} />} />
        <Route path='/:id' element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
