import { useState } from 'react'
import { Header } from './components/Header/Header'
import { BooksList } from './components/BookComponents/BooksList'
import { useGetBooksQuery } from './redux/services/books'
import { useAppSelector } from './redux/hooks'

function App() {
  const [category, setCategory] = useState('')
  const [order, setOrder] = useState('relevance')
  const [input, setInput] = useState('')

  const {data, isLoading, isError,isSuccess,error} = useGetBooksQuery({name: input, order, category})

  const books = useAppSelector(state => state.books.books)


  // if(isLoading) {
  //   console.log('load')
  // } else if(isError) {
  //   console.log(error)
  // } else if(isSuccess) {
  //   console.log(data)
  // }

  return (
    <>
      <Header setInput={setInput} setCategory={setCategory} setOrder={setOrder}/>
      <BooksList books={books}/>
    </>
  )
}

export default App
