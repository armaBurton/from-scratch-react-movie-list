import './App.css';
import { useStateForm } from './useStateForm';
import CurrentMovie from './CurrentMovie';
import MovieForm from './MovieForm';

function App() {
  const {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFormDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFormColor,
  } = useStateForm();

  return <div className='container-div'>
    <section className='current-movie'>
      <CurrentMovie movie={{
        title: movieFormTitle,
        director: movieFormDirector,
        year: movieFormYearReleased,
        color: movieFormColor,
      }} />
    </section>
    <section></section>
    <section className='form-section'>
      <MovieForm 
        movieFormYearReleased={movieFormYearReleased}
        setMovieFormYearReleased={setMovieFormYearReleased}
        movieFormDirector={movieFormDirector}
        setMovieFormDirector={setMovieFormDirector}
        movieFormTitle={movieFormTitle}
        setMovieFormTitle={setMovieFormTitle}
        movieFormColor={movieFormColor} 
        setMovieFormColor={setMovieFormColor}
      />
    </section>
    <section></section>
  </div>;
}

export default App;
