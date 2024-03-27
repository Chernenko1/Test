import { useState } from 'react'
import { Header } from './components/Header/Header'
import { BooksList } from './components/BookComponents/BooksList'
import { useGetBooksQuery } from './redux/services/books'

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
    <>
      <Header setInput={setInput} setCategory={setCategory} setOrder={setOrder} search={search} />
      <BooksList />
    </>
  )
}

export default App
