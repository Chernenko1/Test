import { useAppSelector } from '../../redux/hooks'
import { LoadSpinner } from '../LoadSpinner/LoadSpinner'
import { BookCard } from './BookCard'
import style from './styles/BooksList.module.css'

interface IBookList {
  isLoading: boolean
  load: () => void
}

export const BooksList = ({ isLoading, load }: IBookList) => {
  const { books, totalItems } = useAppSelector((state) => state.books)

  return (
    <article>
      {isLoading && <LoadSpinner />}
      {!!books.length && (
        <section className={style.buttonContainer}>
          <p>Found books: {totalItems}</p>
        </section>
      )}
      <section className={style.bookList}>
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
      </section>
      {!!books.length && books.length !== totalItems && (
        <section className={style.buttonContainer}>
          <button className={style.button} onClick={load}>
            {isLoading ? <LoadSpinner /> : 'Load More'}
          </button>
        </section>
      )}
    </article>
  )
}
