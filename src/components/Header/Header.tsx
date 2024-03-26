import React, { ChangeEvent } from 'react';
import style from './Header.module.css'
import { IoSearch } from "react-icons/io5";

interface IHeader {
    setCategory: (val: string) => void,
    setOrder: (val: string) => void,
    setInput: (val: string) => void
    search: () => void
}

export const Header = ({setCategory, setInput, setOrder,search}: IHeader) => {

    function handleSubmit () {
       
    }

    function changeInput (event: React.ChangeEvent<HTMLInputElement>){
        setInput(event.target.value)
    }

    function selectCategory (event: ChangeEvent<HTMLSelectElement>) {
        setCategory(event.target.value)
    }

    function selectOrder (order: string) {
        setOrder(order)
    }

    return (
        <article className={style.main}>
            <header className={style.header}>
                <h1 className={style.headerTitle}>Search for books</h1>
                    <label>
                        <input name='search' type='search' onChange={(e) => changeInput(e)} />
                        <button title='поиск' type='submit' onClick={search}><IoSearch /></button>
                    </label>
                    
                    <div className={style.selectionWrapper}>
                        <div className={style.selectionContainer}>
                            <p className={style.selectionTitle}>Categories</p>
                            <select defaultValue='all' onChange={(e) => selectCategory(e)}>
                                <option>all</option>
                                <option>art</option>
                                <option>biography</option>
                                <option>computers</option>
                                <option>history</option>
                                <option>medical</option>
                                <option>poetry</option>
                            </select>
                        </div>
                        <div className={style.selectionContainer}>
                            <p className={style.selectionTitle}>Sorting by</p>
                            <select defaultValue='relevance' onChange={(e) => selectOrder(e.target.value)}>
                                <option value='relevance'>relevance</option>
                                <option value='newest'>newest</option>
                            </select>
                        </div>
                    </div>

                    {/*Вынести  в отдельный компонент */}
            </header>
        </article>
    )
}