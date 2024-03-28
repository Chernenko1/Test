import React, { ChangeEvent } from 'react'
import style from './Header.module.css'
import { IoSearch } from 'react-icons/io5'
import { SectionList } from '../SectionList/SectionList'
import { BOOK_CATEGORIES } from '../../constants/BOOK_CATEGORIES'
import { SORT_TYPES } from '../../constants/SORT_TYPES'
import { useNavigate } from 'react-router-dom'

interface IHeader {
  setCategory: (val: string) => void
  setOrder: (val: string) => void
  setInput: (val: string) => void
  search: () => void
  isLoad: boolean
}

export const Header = ({ setCategory, setInput, setOrder, search, isLoad }: IHeader) => {
  const navigate = useNavigate()

  function onSearch() {
    search()
    navigate('/')
  }

  function pressKeyboardEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') onSearch()
  }

  function changeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  function changeCategory(event: ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value)
  }

  function changeOrderBy(event: ChangeEvent<HTMLSelectElement>) {
    setOrder(event.target.value)
  }

  return (
    <article className={style.main}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>Search for books</h1>
        <label>
          <input name='search' type='search' onChange={changeInput} onKeyDown={pressKeyboardEnter} />
          <button title='поиск' type='submit' onClick={onSearch}>
            <IoSearch />
          </button>
        </label>

        <div className={style.selectionWrapper}>
          <div className={style.selectionContainer}>
            <p className={style.selectionTitle}>Categories</p>
            <SectionList option={BOOK_CATEGORIES} onChange={changeCategory} />
          </div>
          <div className={style.selectionContainer}>
            <p className={style.selectionTitle}>Sorting by</p>
            <SectionList option={SORT_TYPES} onChange={changeOrderBy} />
          </div>
        </div>
      </header>
    </article>
  )
}
