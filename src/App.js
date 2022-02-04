import './App.css';
import { useStateForm } from './useStateForm';
import CurrentMovie from './CurrentMovie';

function App() {
  const {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFromDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFromColor,
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
    <section></section>
    <section></section>
  </div>;
}

export default App;
