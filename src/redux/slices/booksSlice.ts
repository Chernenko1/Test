import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IBooksState {
  books: [{ bookName: string; categories: string[]; authors: string[]; id: string; image: string; description: string }]
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
      let a = current(state.books)
      state.books = [...a, ...action.payload]
    },
  },
})

export const { setBooks, addBooks } = booksSlice.actions

export const selectBoks = (state: RootState) => state.books.books

export default booksSlice.reducer
