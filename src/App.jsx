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


function App() {
  const dispatch = useDispatch();

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
            <Route path="/search/:id" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
