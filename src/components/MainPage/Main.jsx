import Movies from "../Movies/Movies";
import SavedMoviesList from "../Saved Movies/SavedMoviesList";
import Searchbar from "../Searchbar/Searchbar";
import './Main.css'

export default function Main () {
    return (
        <>
                <Searchbar />
            <main className="main-container">
                
                <Movies />
                <SavedMoviesList />
            </main>
        </>
    )
}