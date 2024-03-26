import { BookCard } from "./BookCard"
import style from './styles/BooksList.module.css'

interface IBooksList {
  books: []
}

export const BooksList = ({books}: IBooksList) => {
  // console.log(, bookName)
  
  return (
    <article className={style.main}>
         {books.map(book => <BookCard category={book.categories[0]} bookName={book.bookName} authors={book.authors} id={book.id}/>)}
    </article>
  )
}