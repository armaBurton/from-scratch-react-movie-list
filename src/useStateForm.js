import { useState } from 'react';

export function useStateForm(){
  const [allMovies, setAllMovies] = useState();
  const [filteredMovies, setFilteredMovies] = useState();
  const [movieFormYearReleased, setMovieFormYearReleased] = useState();
  const [movieFormDirector, setMovieFromDirector] = useState();
  const [movieFormTitle, setMovieFormTitle] = useState();
  const [movieFormColor, setMovieFromColor] = useState();

  return {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFromDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFromColor,
  };
}