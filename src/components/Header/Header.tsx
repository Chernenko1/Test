import './Header.css'
import { IoSearch } from "react-icons/io5";

export const Header = () => {
    return (
        <article className='main'>
            <header className='header'>
                <h1 className='headerTitle'>Search for books</h1>

                    <div>
                        <input type='search'/>
                        <button title='поиск' type='submit'><IoSearch /></button>
                    </div>

                    {/*Вынести  в отдельный компонент */}
                    <div className='selectionWrapper'>
                        <div className='selectionContainer'>
                            <p className='selectionTitle'>Categories</p>
                            <select name='cat'/>
                        </div>
                        <div className='selectionContainer'>
                            <p className='selectionTitle'>Sorting by</p>
                            <select name='sort'>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </div>
            </header>
        </article>
    )
}