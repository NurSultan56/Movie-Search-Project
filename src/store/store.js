import {configureStore} from '@reduxjs/toolkit'
import moviesSlice from './reducer.js'

const store = configureStore({
    reducer: {
        movies: moviesSlice
    }
})

export default store