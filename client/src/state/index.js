import { createSlice } from "@reduxjs/toolkit"

/* Setting initial state to dark mode... I mean, who doesnt love dark mode :) */
const initialState = {
    mode: "dark"
}


/* Creating a function to change the theme dark to light (in other words. fuction that change states) */
export const globalSlice = createSlice({
    name: "global",
    initialState,
        reducers: {
            setMode: (state) => {
                state.mode = state.mode === 'light' ? 'dark' : 'light'
            }
    }
})

/* giving access to the fuctions */
export const { setMode } = globalSlice.actions

export default globalSlice.reducer
