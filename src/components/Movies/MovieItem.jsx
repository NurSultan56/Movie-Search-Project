import React from "react";

import {useDispacth} from 'react-redux'
import { addToList } from "../../store/reducer";

function MovieItem ({title, description, id}) {
    let dispatch = useDispacth()

    return (
        <>
        <div className="movie-item">
            <h3 className="movie-item-title"></h3>
                <p className="movie-item-description">

                </p>
                <button onClick={() => {
                    dispatch(addToList({
                        id: id,
                        title: title,
                        description: description
                    }))
                }} className="movie-item-add-to-list">Add to List</button>
        </div>
        </>
    )
}


export default MovieItem