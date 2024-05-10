import { useEffect, useState } from "react";

import MovieItem from "./MovieItem";
import {useDispatch, useSelector} from 'react-redux'
import { fetchContent } from "../../store/reducer";



function Movies () {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContent)
    }, [])

    let movies = useSelector((state) => state.movies.movies)
    let isLoading = useSelector((state) => state.movies.isLoading)
    let error = useSelector((state) => state.movies.error)

    console.log(movies)

    if(isLoading) {
        return 'LOADING...'
    }

    if (error) {
        return 'ERROR'
    }

    return (
        <>
            <div className="movies">
                <h2 className="movie-list-title"></h2>
                    <ul className="movie-list" key={item.id}>
                        <li className="movie-list-item">
                            <MovieItem {...item}/>
                        </li>
                    </ul>
            </div>
        </>
    )
}

export default Movies