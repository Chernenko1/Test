import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setBooks } from '../slices/booksSlice'

export const booksApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ name, category, sort }) =>
        `?q=intitle:${name}+subject:${category}&maxResults=30&orderBy=${sort}&key=${import.meta.env.VITE_API_KEY}`,
      async onQueryStarted({}, { queryFulfilled, dispatch }) {
        try {
          let booksArr = []
          const { data } = await queryFulfilled
          if (data.totalItems !== 0) {
            data.items.map(
              (item: {
                id: string
                volumeInfo: {
                  title: string
                  authors: string[]
                  categories: string[]
                  imageLinks: { smallThumbnail: string }
                }
              }) => {
                booksArr.push({
                  id: item.id,
                  bookName: item.volumeInfo.title,
                  authors: item.volumeInfo.authors ?? [''],
                  categories: item.volumeInfo.categories ?? [''],
                  image: item.volumeInfo.imageLinks.smallThumbnail,
                })
              },
            )
            dispatch(setBooks(booksArr))
          } else {
            dispatch(setBooks([]))
          }
        } catch (error) {
          console.log(error)
        }
      },
    }),
  }),
})

export const { useGetBooksQuery } = booksApi
