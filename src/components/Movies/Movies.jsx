import React from "react";
import { useEffect, useState } from "react";
import './movie.css'
import MovieItem from "./MovieItem";
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from "../../store/reducer";



function Movies() {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContent)
    }, [])

    let movies = useSelector((state) => state.movies.movies)
    let isLoading = useSelector((state) => state.movies.isLoading)
    let error = useSelector((state) => state.movies.error)
    let searchError=useSelector((state)=>state.movies.searchError);

    if (isLoading) {
        return <h1 className="loading-header">Loading...</h1>;
    }

    if (error) {
        return <h1 className="error-header">Something went wrong...please retry!</h1>;
    }

    if (searchError) {
        return <h1 className="search-error-header">Found nothing.Please try again!</h1>
    }

    return (
        <>
            <div className="movies">
                <h2 className="movie-list-title"></h2>

                <ul className="movie-list" >
                    {movies.map((item) => (
                        <li className="movie-list-item" key={item.imdbID} >
                            <MovieItem {...item} />
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}


export default React.memo(Movies)