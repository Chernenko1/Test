import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IBooksState {
  books: [
    {
      bookName: string
      categories: string[]
      authors: string[]
      id: string
      image: string
      description: string
    },
  ]
  totalItems: number
}

const initialState: IBooksState = {
  books: [],
  totalItems: 0,
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload.books
      state.totalItems = action.payload.totalItems
    },
    addBooks: (state, action) => {
      let books = current(state.books)
      state.books = [...books, ...action.payload.books]
      state.totalItems = action.payload.totalItems
    },
  },
})

export const { setBooks, addBooks } = booksSlice.actions

export const selectBoks = (state: RootState) => state.books.books

export default booksSlice.reducer