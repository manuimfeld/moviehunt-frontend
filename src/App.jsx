import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getMoviesApi } from './api/getMovies';
//Components and views
import Header from './components/Header'
import Home from './views/Home';
import Error from './views/Error';
import Movie from './views/Movie';
//Styles
import './App.css'
import Favorites from './views/Favorites';
import initializeLocalStorage from './helpers/initializeStorage';
import Search from './views/Search';


function App() {
  const dispatch = useDispatch();

  // If on app run, localStorage is empty, create array favorites
  initializeLocalStorage()

  useEffect(() => {
    // Get popular movies for Home view
    getMoviesApi(dispatch)

  }, [dispatch])

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search/:id" element={<Search />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
