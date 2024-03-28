import { MutableRefObject, memo } from 'react'
import { useAppSelector } from '../../store/hooks'
import { LoadSpinner } from '../LoadSpinner/LoadSpinner'
import { BookCard } from './BookCard'
import style from './styles/BooksList.module.css'

interface IBookList {
  isLoading: boolean
  isStart: MutableRefObject<boolean>
  load: () => void
}

export const BooksList = memo(function BookList({ isLoading, load, isStart }: IBookList) {
  const { books, totalItems } = useAppSelector((state) => state.books)

  return (
    <article>
      {!isStart.current && !books.length && (
        <section className={style.centredContainer}>
          <p>It seems that there are no such books</p>
        </section>
      )}
      <section className={style.centredContainer}>
        {isLoading && <LoadSpinner />}
        {isStart.current && <p>Let's find some books</p>}
      </section>
      {!!books.length && (
        <section className={style.centredContainer}>
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
        <section className={style.centredContainer}>
          <button className={style.button} onClick={load}>
            {isLoading ? <LoadSpinner /> : 'Load More'}
          </button>
        </section>
      )}
    </article>
  )
})
