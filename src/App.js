import './App.css';
import { useStateForm } from './useStateForm';
import CurrentMovie from './CurrentMovie';
import MovieForm from './MovieForm';
import RenderMovies from './RenderMovies';

function App() {

  const {
    allMovies, setAllMovies,
    // filteredMovies, setFilteredMovies,
    finishedCard, setFinishedCard,
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFormDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFormColor,
  } = useStateForm();

  function addMovie(newMovie){
    const updateMovies = [...allMovies, newMovie];
    setAllMovies(updateMovies);
  }

  // function deleteMovie(){
  //   console.log('click');
  // }

  return <div className='container-div'>
    <section className='current-movie'>
      {movieFormTitle || movieFormDirector || movieFormYearReleased ? <CurrentMovie 
        movie={{
          title: movieFormTitle,
          director: movieFormDirector,
          year: movieFormYearReleased,
          color: movieFormColor,
          card: finishedCard,
          id:''
        }} /> : ''}
    </section>
    <section className='filter-section'></section>
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
        finishedCard={finishedCard}
        setFinishedCard={setFinishedCard}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
      />
    </section>
    <section>
      {
        allMovies.length ? <RenderMovies movies={allMovies} deleteMovie={deleteMovie} /> : ''
      }
    </section>
  </div>;
}

export default App;
