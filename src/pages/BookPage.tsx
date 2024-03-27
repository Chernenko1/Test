import { useParams } from 'react-router-dom'
import { BookItem } from '../components/BookComponents/BookItem'

export const BookPage = () => {
  const { id } = useParams()

  return <BookItem id={id as string} />
}
