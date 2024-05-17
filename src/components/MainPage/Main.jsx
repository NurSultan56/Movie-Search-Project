import Movies from "../Movies/Movies";
import SavedMoviesList from "../Saved Movies/SavedMoviesList";
import Searchbar from "../Searchbar/Searchbar";
import './Main.css'

export default function Main() {
    return (
        <>

            <main>
                <Searchbar />
                <div className="main-container">
                    <Movies />
                    <SavedMoviesList />
                </div>
            </main>
        </>
    )
}