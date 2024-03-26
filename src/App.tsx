import { useState } from 'react'
import { Header } from './components/Header/Header'
import { BooksList } from './components/BookComponents/BooksList'
import { useGetBooksQuery } from './redux/services/books'
import { useAppSelector } from './redux/hooks'

function App() {
  const [category, setCategory] = useState('')
  const [order, setOrder] = useState('relevance')
  const [input, setInput] = useState('')

  
  const books = useAppSelector(state => state.books.books)

  console.log(books)

  const {data, isLoading, isError,isSuccess,error, refetch} = useGetBooksQuery({name: input, order, category})

  function search () {
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
    <>
      <Header setInput={setInput} setCategory={setCategory} setOrder={setOrder} search={search}/>
      <BooksList books={books}/>
    </>
  )
}

export default App
