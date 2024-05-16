import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { useState } from 'react'

let apikey = '6138b384'

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async (inputValue) => {
        const res = await fetch(`http://www.omdbapi.com/?s=${inputValue}&apikey=${apikey}&`)
        const data = await res.json()
        return data
    }
)

const moviesSlice = createSlice({
    initialState: {
        movies: [
            {
                "Title": "What Dreams May Come",
                "Year": "1998",
                "imdbID": "tt0120889",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNTg5ZWRjNTctNmMyMi00NTJmLTg3YjktMzJlMDRiYWQ0MjMzL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              },
              {
                "Title": "The Bucket List",
                "Year": "2007",
                "imdbID": "tt0825232",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTY2NTUyMjIyNF5BMl5BanBnXkFtZTYwNzYwMDM4._V1_SX300.jpg"
              },
              {
                "Title": "Manchester by the Sea",
                "Year": "2016",
                "imdbID": "tt4034228",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg"
              },
              {
                "Title": "The Avengers",
                "Year": "2012",
                "imdbID": "tt0848228",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
              },
              {
                "Title": "Spider-Man",
                "Year": "2002",
                "imdbID": "tt0145487",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
              },
              {
                "Title": "Kung Fu Panda",
                "Year": "2008",
                "imdbID": "tt0441773",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
              },
              {
                "Title": "The Karate Kid",
                "Year": "2010",
                "imdbID": "tt1155076",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ1NzRhYjYtMWY3My00ODA0LTk5ZDctYjQ4YjE0M2RhMGNiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
              },
             
             
              {
                "Title": "The Lord of the Rings: The Fellowship of the Ring",
                "Year": "2001",
                "imdbID": "tt0120737",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
              },
              {
                "Title": "The Lord of the Rings: The Return of the King",
                "Year": "2003",
                "imdbID": "tt0167260",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              },
              {
                "Title": "The Lord of the Rings: The Two Towers",
                "Year": "2002",
                "imdbID": "tt0167261",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
              },
              {
                "Title": "The Hobbit: An Unexpected Journey",
                "Year": "2012",
                "imdbID": "tt0903624",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg"
              },
              {
                "Title": "The Hobbit: The Desolation of Smaug",
                "Year": "2013",
                "imdbID": "tt1170358",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg"
              },
              {
                "Title": "The Hobbit: The Battle of the Five Armies",
                "Year": "2014",
                "imdbID": "tt2310332",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_SX300.jpg"
              },
              {
                "Title": "Shutter Island",
                "Year": "2010",
                "imdbID": "tt1130884",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
              },
              
        ], 
        savedMovies: [],
        notClickedSavedMovies: true,
        isLoading: null,
        error: false,
        searchError: false,
    },
    name: 'movies',
    reducers: {
        addToList:(state, action) => {
            let indexOfElement = state.savedMovies.findIndex(item=>item.imdbID === action.payload.imdbID)
            console.log(indexOfElement)
            if(indexOfElement<0) {
                return {...state,savedMovies:[...state.savedMovies,action.payload]}
            } else {
                return {...state, savedMovies:[...state.savedMovies]}
            }
              
        },

        deleteFromList:(state,action)=>{
            let indexOfElement=state.savedMovies.findIndex(item=>item.imdbID===action.payload.imdbID);
            return {...state,savedMovies:[...state.savedMovies.toSpliced(indexOfElement,1)]}
        },

        notClickedChange:(state, action) => {
          return {...state, notClickedSavedMovies:!state.notClickedSavedMovies}
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            if(action.payload.Response === 'True') {
                state.movies = action.payload.Search
                state.searchError=false
            } else {
                state.searchError=true
            }
            state.isLoading = false
        })
        builder.addCase(fetchContent.rejected, (state) => {
            state.isLoading = false
            state.error = true
        })
    },
})

export const {addToList} = moviesSlice.actions
export const {deleteFromList} = moviesSlice.actions
export const {notClickedChange} = moviesSlice.actions

export default moviesSlice.reducer