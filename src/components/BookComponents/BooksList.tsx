import { useAppSelector } from '../../redux/hooks'
import { LoadSpinner } from '../LoadSpinner/LoadSpinner'
import { BookCard } from './BookCard'
import style from './styles/BooksList.module.css'

interface IBookList {
  isLoading: boolean
  load: () => void
}

export const BooksList = ({ isLoading, load }: IBookList) => {
  const books = useAppSelector((state) => state.books.books)

  return isLoading ? (
    <LoadSpinner />
  ) : (
    <article>
      <section className={style.main}>
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
      {books.length && (
        <section className={style.buttonContainer}>
          <button className={style.button} onClick={load}>
            Load More
          </button>
        </section>
      )}
    </article>
  )
}
