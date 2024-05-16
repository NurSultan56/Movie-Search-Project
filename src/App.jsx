import './App.css'
import Main from './components/MainPage/Main'
import { Routes, Route } from 'react-router-dom'
import ListPage from './components/ListPage/ListPage'
import Searchbar from './components/Searchbar/Searchbar'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className="app_container">
        <Header/>
        <Routes >
          <Route path="/" element={<Main />} />
          <Route path={`/list/:id`} element={<ListPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
