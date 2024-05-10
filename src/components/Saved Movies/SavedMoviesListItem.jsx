import React from "react";

function SavedMoviesListItem ({title}) {
    return (
        <>
            <div className="saved-movie-list-item">
                <p className="saved-movie-title">{title}</p>
            </div>
        </>
    )
}

export default SavedMoviesListItem