import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const booksApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/v1/volumes',}),
    endpoints: builder => ({
        getBooks: builder.query({
            query: ({name, category, sort}) => `?q=intitle:${name}+subject:${category}&maxResults=30&orderBy${sort}&key=${process.env.VITE_API_KEY}`
        })
    })
})

export const {useGetBooksQuery} = booksApi