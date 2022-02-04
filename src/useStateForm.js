import { useState } from 'react';

export function useStateForm(){
  const [allMovies, setAllMovies] = useState();
  const [filteredMovies, setFilteredMovies] = useState();
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  return {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFormDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFormColor,
  };
}