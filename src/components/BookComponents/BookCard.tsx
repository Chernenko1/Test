import style from './styles/BookCard.module.css'

interface IBookCard {
    category: string,
    bookName: string,
    authors: string[],
    id: string,
    img: string
}

export const BookCard = ({category, bookName, authors, id, img}: IBookCard) => {
    return (
        <article className={style.main} key={id}>
            <article className={style.imageContainer}>
                <img className={style.image} src={img}/>
            </article>
            <article className={style.infoContainer}>
                <p>{category}</p>
                <section className={style.bookInfo}>
                    <p style={{fontWeight: 'bold', color: 'black', }}>{bookName}</p>
                    <div style={{display: 'flex', columnGap: 5, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        {/* {authors.map((item, ind) => <p style={{whiteSpace:'normal'}} key={ind}>{item}</p>)} */}
                        <p>{authors.join(' | ')}</p>
                    </div>
                </section>
            </article>
        </article>
    )
}