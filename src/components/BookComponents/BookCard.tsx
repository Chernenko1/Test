import { Link } from 'react-router-dom'
import style from './styles/BookCard.module.css'

interface IBookCard {
  category: string
  bookName: string
  authors: string[]
  id: string
  img: string
}

export const BookCard = ({ category, bookName, authors, id, img }: IBookCard) => {
  return (
    <Link to={`${id}`} key={id} className={style.main}>
      <article className={style.imageContainer}>
        <img className={style.image} src={img} />
      </article>
      <article className={style.infoContainer}>
        <p>{category}</p>
        <section className={style.bookInfo}>
          <p style={{ fontWeight: 'bold', color: 'black' }}>{bookName}</p>
          <div style={{ display: 'flex', columnGap: 5, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <p>{authors.join(' | ')}</p>
          </div>
        </section>
      </article>
    </Link>
  )
}
