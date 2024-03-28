import { useCallback, useEffect, useRef, useState } from 'react'
import { Header } from '@components/Header/Header'
import { BooksList } from '@components/BookComponents/BooksList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookPage } from '@pages/BookPage'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { addBooks, setBooks } from '@store/slices/booksSlice'
import { getBooks } from './utils/getBooks'

function App() {
  const [category, setCategory] = useState('')
  const [order, setOrder] = useState('relevance')
  const [input, setInput] = useState('')
  const [isLoading, setLoading] = useState(false)
  const isStart = useRef<boolean>(true)

  const { books } = useAppSelector((state) => state.books)

  const dispatch = useAppDispatch()

  async function search() {
    setLoading(true)

    let response = await getBooks(input, category, 0, order)

    dispatch(setBooks(response))

    isStart.current = false
    setLoading(false)
  }

  const loadMore = useCallback(async () => {
    setLoading(true)

    let response = await getBooks(input, category, books.length + 1, order)

    dispatch(addBooks(response))

    setLoading(false)
  }, [])
  return (
    <BrowserRouter>
      <Header setInput={setInput} setCategory={setCategory} setOrder={setOrder} search={search} isLoad={isLoading} />
      <Routes>
        <Route path='/' element={<BooksList isLoading={isLoading} load={loadMore} isStart={isStart} />} />
        <Route path='/:id' element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
