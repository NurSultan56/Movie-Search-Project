import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        movies: moviesSlice
    }
})

export default store