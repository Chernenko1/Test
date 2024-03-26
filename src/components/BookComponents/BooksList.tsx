import { BookCard } from "./BookCard"
import style from './styles/BooksList.module.css'

interface IBooksList {
  books: []
}

let bookss = [{
  categories: 1,
  bookName: 2,
  authors: [1,2,3],
  id: 2
},
{
  categories: 1,
  bookName: 2,
  authors: [1,2,3],
  id: 3
},
{
  categories: 1,
  bookName: 2,
  authors: [1,2,3],
  id: 4
},
{
  categories: 1,
  bookName: '5555555555555555555555555555555555555555555555555555555555555555555555555555555555',
  authors: [1,2,3],
  id: 5
},
{
  categories: 1,
  bookName: '5555555555555555555555555555555555555555555555555555555555555555555555555555555555',
  authors: [1,2,3],
  id: 7
},
{
  categories: 1,
  bookName: '5555555555555555555555555555555555555555555555555555555555555555555555555555555555',
  authors: [1,2,3],
  id: 6
},
]

export const BooksList = ({books}: IBooksList) => {
  // console.log(, bookName)
  
  return (
    <article className={style.main}>
         {books.map((book, ind) => <BookCard 
                                      key={ind} 
                                      category={book.categories[0]} 
                                      bookName={book.bookName} 
                                      authors={book.authors} 
                                      id={book.id} 
                                      img={book.image}
         />)}
    </article>
  )
}