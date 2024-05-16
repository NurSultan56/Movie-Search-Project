import React, { useEffect, useState } from "react";
import './saved-movie-list.css'
import SavedMoviesListItem from "./SavedMoviesListItem";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { deleteFromList, notClickedChange } from "../../store/reducer";

function SavedMoviesList () {
    let savedMovies = useSelector((state) => state.movies.savedMovies)
    let notClickedSavedMovies = useSelector((state)=> state.movies.notClickedSavedMovies)
    let dispatch = useDispatch()
    let [buttonText, setButtonText] = useState('Save List')
    let [id,setId]=useState('');

    useEffect(()=>{
        if(notClickedSavedMovies===true){
            setButtonText('Save List')
        } 
        else {
            setButtonText('Edit List')
        }
    })

    const url = 'https://acb-api.algoritmika.org/api/movies/list/'
    const data = {
        "title" : "myList",
        "movies": [
            ...savedMovies
        ]
    }

    const handleSave=async()=>{
        try {
            const response = await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
            });
            const json = await response.json();
            setId(json.id);
        } catch (error) {
        console.error('Ошибка:', error);
        }
    }

    useEffect(()=>{
        if(!notClickedSavedMovies) {
            handleSave()
        }
    }, [notClickedSavedMovies])

    return (
            <>
             <div className="list-page__container">
                    <div className="list-page__movies-container">
                    <h1 className="saved-movie-title">Saved Movies</h1>
                    {savedMovies.length === 0 ? <h1 className="list-page__empty">List is empty</h1> :
                    <>
                    <ul className="saved-movie-list">
                       {savedMovies.map((movie)=>{
                            return(
                                <li className="saved-movie-list-item" key={movie.imdbID}>
                                    <img className="saved-movie-poster" src={movie.Poster!='N/A' ? `${movie.Poster}` : `default-movie.png`} alt="poster"/>
                                    <h3 className="saved-movie-item-title">{movie.Title} ({movie.Year})</h3>
                                    {notClickedSavedMovies &&
                                    <button onClick={()=>{
                                        dispatch(deleteFromList({
                                            imdbID:movie.imdbID,
                                        }))
                                    }} className="delete-saved-movie">Delete</button>}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="save_and_watch_container">
                        
                    </div>
                    <button onClick={()=>{
                        dispatch(notClickedChange());
                        }} className="list-page__button">{buttonText}</button>
                    {!notClickedSavedMovies && <Link to={`/list/${id}`} className='link-page__movies-watch-button'>Watch now</Link>}
                    </>
                    }                
                    </div>
                </div>
            </>
        )
}

export default SavedMoviesList
