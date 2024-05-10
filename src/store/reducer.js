import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

let apikey = '6138b384'

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&`)
        const data = await res.json()
        return data
    }
)

const moviesSlice = createSlice({
    initialState: {
        movies: [],
        savedMovies: [],
        isLoading: null,
        error: false
    },
    name: 'movies',
    reducers: {
        addToList:(state, action) => {
            return {...state, savedMoviesL:[...state.savedMovies, action.payload]}
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state) => {
            state.movies = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchContent.rejected, (state) => {
            state.isLoading = false
            state.error = true
        })
    },
})

export const {addToList} = moviesSlice.actions

export default moviesSlice.reducer