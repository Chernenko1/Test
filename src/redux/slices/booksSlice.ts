import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IBooksState {
  books: [{ bookName: string; categories: string[]; authors: string[]; id: string; image: string; title: string }]
}

const initialState: IBooksState = {
  books: [],
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload
    },
    addBooks: (state, action) => {
      // state.books = [...state.books,action.payload]
    },
  },
})

export const { setBooks, addBooks } = booksSlice.actions

export const selectBoks = (state: RootState) => state.books.books

export default booksSlice.reducer
