import { useState } from 'react';

export function useStateForm(){
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState(0);
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('transparent');
  const [finishedCard, setFinishedCard] = useState(false);

  return {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFormDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFormColor,
    finishedCard, setFinishedCard,
  };
}