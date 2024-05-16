import React from "react";
import { useDispatch } from 'react-redux'
import { deleteFromList } from "../../store/reducer";

function SavedMoviesListItem({ Title, Poster, Year, imdbID}) {
    let dispatch = useDispatch()
    return (
        <>
            <div className="saved-movie-list-item">
            <button onClick={() => {
                    dispatch(deleteFromList({
                        imdbID: imdbID,
                        Title: Title,
                        Poster: Poster,
                        Year: Year
                    }))
                }} className="delete-saved-movie">DELETE</button>
                <img className="saved-movie-poster" src={Poster} alt={Title} />
                <h3 className="saved-movie-item-title">{Title} ({Year})</h3>
                
            </div>
        </>
    )
}

export default SavedMoviesListItem