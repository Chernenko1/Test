import style from './styles/BookCard.module.css'

interface IBookCard {
    category: string,
    bookName: string,
    author: string,
}

export const BookCard = ({category, bookName, author}: IBookCard) => {
    return (
        <article className={style.main}>
            <article className={style.imageContainer}>
                <img className={style.image} src='https://free-png.ru/wp-content/uploads/2022/11/free-png.ru-355.png'/>
            </article>
            <article className={style.infoContainer}>
                <p>{category}</p>
                <section className={style.bookInfo}>
                    <p style={{fontWeight: 'bold', color: 'black'}}>{bookName}</p>
                    <p>{author}</p>
                </section>
            </article>
        </article>
    )
}