import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IBooksState {
    books: []
}

const initialState: IBooksState = {
    books: []
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {}
})

// export const {} = booksSlice.actions

export const selectBoks = (state: RootState) => state.books.books

export default booksSlice.reducer