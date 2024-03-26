import { BookCard } from "./BookCard"
import style from './styles/BooksList.module.css'


export const BooksList = () => {
  return (
    <article className={style.main}>
        <BookCard category="computers" bookName="Очень длинное название книги, а ниже ее автор" author="Имя Фамилия"/>
        <BookCard category="computers" bookName="Очень длинное название книги, а ниже ее автор" author="Имя Фамилия"/>
        <BookCard category="computers" bookName="Очень длинное название книги, а ниже ее автор" author="Имя Фамилия"/>
        <BookCard category="computers" bookName="Очень длинное название книги, а ниже ее автор" author="Имя Фамилия"/>
        <BookCard category="computers" bookName="Очень длинное название книги, а ниже ее автор" author="Имя Фамилия"/>
        <BookCard category="computers" bookName="Очень длинное название книги, а ниже ее автор" author="Имя Фамилия"/>
    </article>
  )
}