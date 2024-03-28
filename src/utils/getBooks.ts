import axios from 'axios'

interface IBookReq {
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    categories: string[]
    imageLinks: { thumbnail: string }
    description: string
  }
}

interface Book {
  id: string
  bookName: string
  authors: string[]
  categories: string[]
  image: string
  description: string
}

const URL = import.meta.env.VITE_BASE_URL

export async function getBooks(
  name: string,
  category: string,
  startIndex: number,
  order: string,
): { books: Book[]; totalItems: number } {
  let booksArr: Book[] = []

  const { data } = await axios.get(
    URL +
      `?q=intitle:${name}+subject:${category}&startIndex=${startIndex}&maxResults=30&orderBy=${order}&key=${import.meta.env.VITE_API_KEY}`,
  )

  if (data.totalItems !== 0) {
    data.items.map(({ volumeInfo, id }: IBookReq) => {
      booksArr.push({
        id: id,
        bookName: volumeInfo.title,
        authors: volumeInfo.authors ?? [''],
        categories: volumeInfo.categories ?? [''],
        image: volumeInfo.imageLinks.thumbnail,
        description: volumeInfo.description,
      })
    })
  }
  return { books: booksArr, totalItems: data.totalItems }
}
