import React from "react";

import SavedMoviesListItem from "./SavedMoviesListItem";
import {useSelector} from 'react-redux'
import SavedMovieListItem from "./SavedMoviesListItem";

function SavedMoviesList () {
    let savedMovies = useSelector((state) => state.movies.savedMovies)

    return (
        <>
            <div className="saved-movie-list">
                <h4 className="saved-movie-title">Saved movie List</h4>
                {savedMovies.length ?
                <ul className="saved-movie-list">
                    {savedMovies.map((item, index) => (
                        <li className="saved-movie-list-item">
                            <SavedMoviesListItem/>
                        </li>
                    ))}
                </ul> 
                :
                <p className="saved-movie-list-note">Nothing Saved</p>
                }
            </div>
        </>
    )
}

export default SavedMoviesList