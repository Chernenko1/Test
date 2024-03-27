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
              ({
                volumeInfo,
                id,
              }: {
                id: string
                volumeInfo: {
                  title: string
                  authors: string[]
                  categories: string[]
                  imageLinks: { smallThumbnail: string }
                }
              }) => {
                booksArr.push({
                  id: id,
                  bookName: volumeInfo.title,
                  authors: volumeInfo.authors ?? [''],
                  categories: volumeInfo.categories ?? [''],
                  image: volumeInfo.imageLinks.smallThumbnail,
                  title: volumeInfo.title,
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
