import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { addBooks, setBooks } from '../slices/booksSlice'

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

export const booksApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ name, category, sort, startIndex }) =>
        `?q=intitle:${name}+subject:${category}&startIndex=${startIndex}&maxResults=30&orderBy=${sort}&key=${import.meta.env.VITE_API_KEY}`,
      async onQueryStarted({ startIndex }, { queryFulfilled, dispatch }) {
        try {
          let booksArr: IBookReq[] = []
          const { data } = await queryFulfilled
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
            startIndex === 0
              ? dispatch(setBooks({ books: booksArr, totalItems: data.totalItems }))
              : dispatch(addBooks({ books: booksArr, totalItems: data.totalItems }))
          } else {
            dispatch(setBooks({ books: [], totalItems: 0 }))
          }
        } catch (error) {
          return { message: error }
        }
      },
    }),
  }),
})

export const { useGetBooksQuery } = booksApi
