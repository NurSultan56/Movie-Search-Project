import React, { useEffect, useState } from "react";
import './movie-item.css'
import { useDispatch, useSelector} from 'react-redux'
import { addToList } from "../../store/reducer";
import { deleteFromList } from "../../store/reducer";

function MovieItem({ Title, Poster, imdbID, Year}) {
    let notClickedSavedMovies=useSelector(state=>state.movies.notClickedSavedMovies);
    let [notClicked,setNotClicked]=useState(true);
    let [clickedButton,setClickedButton]=(useState('movie-item-add-to-list'));
    let [buttonInnerText, setButtonInnerText] = useState('ADD TO LIST')
    let dispatch = useDispatch()
    let savedMovies=useSelector((state)=>state.movies.savedMovies);

    useEffect(()=>{
        if((savedMovies.findIndex(item=>item.imdbID===imdbID)) >= 0 ){
            setNotClicked(false)
            setClickedButton('movie-item-added-to-list')
        } else {
            setNotClicked(true)
            setClickedButton('movie-item-add-to-list')
        }
    }, [savedMovies])

    function handleClick(){
        if(notClicked){
            setClickedButton('movie-item-added-to-list');
            setButtonInnerText('ADDED')
            dispatch(addToList({
                Title: Title,
                Year: Year,
                imdbID: imdbID,
                Poster: Poster,
            }));
        }
        else{
            dispatch(deleteFromList({
                Title: Title,
                Year: Year,
                imdbID: imdbID,
                Poster: Poster,
            }))
            setClickedButton('movie-item-add-to-list');
            setButtonInnerText('ADD TO LIST')
        }
        setNotClicked(!notClicked);

    }

    return (
        <>
        
            <div className="movie-item">
            <button disabled={!notClickedSavedMovies} onClick={handleClick} className={clickedButton}>{buttonInnerText}</button>
                <img className="poster" src={Poster} alt={Title} />
                <h3 className="movie-item-title">{Title} ({Year})</h3>

            </div>
            
        </>
    )
}


export default MovieItem