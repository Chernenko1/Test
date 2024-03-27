import { useAppSelector } from '../../redux/hooks'
import { BookCard } from './BookCard'
import style from './styles/BooksList.module.css'

export const BooksList = () => {
  const books = useAppSelector((state) => state.books.books)

  return (
    <article className={style.main}>
      {books.map((book, ind) => (
        <BookCard
          key={ind}
          category={book.categories[0]}
          bookName={book.bookName}
          authors={book.authors}
          id={book.id}
          img={book.image}
        />
      ))}
    </article>
  )
}
