import './Header.css'

export const Header = () => {
    return (
        <article className='main'>
            <header>
                <h1>Search for books</h1>
                <div>
                    <input type='search'/>
                    <button title='поиск' type='submit'/>
                </div>
                <div>
                    {/*Вынести  в отдельный компонент */}
                    <div>
                        <p>Categories</p>
                        <select name='cat'/>
                    </div>
                    <div>
                        <p>Sorting by</p>
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