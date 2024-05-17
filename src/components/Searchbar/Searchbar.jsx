import React, { useState } from "react";
import './searchbar.css'

import { useDispatch } from 'react-redux'
import { fetchContent } from "../../store/reducer";

function Searchbar() {

    let dispatch = useDispatch()
    let [inputValue, setInputValue] = useState('')

    return (
        <>
            <div className="searchbar">
                <input type="text" name="search-movie" onChange={(e) => setInputValue(e.target.value)} />
                <button className="search-button" onClick={() => { dispatch(fetchContent(inputValue)) }}> Search</button>
            </div>
        </>
    )
}

export default Searchbar