import { useAppSelector } from '@store/hooks'
import style from './styles/BookItem.module.css'

interface IBook {
  id: string
}

export const BookItem = ({ id }: IBook) => {
  const book = useAppSelector((state) => state.books.books).find((item) => item.id === id)
  return (
    <article className={style.main}>
      <section className={style.imgContainer}>
        <img src={book?.image} />
      </section>
      <section className={style.bookInfoContainer}>
        <div className=''>
          <p className={style.categoriesText}>{book?.categories.join(' / ')}</p>
        </div>
        <div>
          <p className={style.titleText}>{book?.bookName}</p>
        </div>
        <div>
          <p className={style.authorsText}>{book?.authors.join(' || ')}</p>
        </div>
        <div className={style.descriptionContainer}>
          <p>{book?.description}</p>
        </div>
      </section>
    </article>
  )
}
