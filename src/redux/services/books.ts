import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { setBooks } from "../slices/booksSlice";

// console.log(process.env.VITE_API_KEY)

export const booksApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/v1/volumes',}),
    endpoints: builder => ({
        getBooks: builder.query({
            query: ({name, category, sort}) => `?q=intitle:${name}+subject:${category}&maxResults=30&orderBy${sort}&key=${import.meta.env.VITE_API_KEY}`,
            async onQueryStarted ({}, {queryFulfilled, dispatch}) {
                try {
                    const {data} = await queryFulfilled
                    data.items.map((item: {id: string, volumeInfo: {title: string, authors: string[], categories: string[]}}) => 
                        dispatch(setBooks({
                            id: item.id, 
                            bookName: item.volumeInfo.title, 
                            authors: item.volumeInfo.authors ?? [''],
                            categories: item.volumeInfo.categories ?? ['']
                        }
                    )))
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
})

export const {useGetBooksQuery} = booksApi