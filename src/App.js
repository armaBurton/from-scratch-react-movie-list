import './App.css';
import { useStateForm } from './useStateForm';
import CurrentMovie from './CurrentMovie';
import MovieForm from './MovieForm';
import RenderMovies from './RenderMovies';

function App() {

  const {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
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

  function deleteMovie(id){
    const index = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilteredMovies(search){
    const filteredMovies = allMovies.filter(movie => movie.title.includes(search));

    setFilteredMovies(filteredMovies);
  }

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
        }} 
        deleteMovie={deleteMovie} /> : ''}
    </section>
    <section className='filter-section'>
      <h2>Filter Movies</h2>
      <input onChange={(e) => handleFilteredMovies(e.target.value)} />
    </section>
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
    <section className='list-section'>
      {
        <RenderMovies movies={
          filteredMovies.length 
            ? filteredMovies
            : allMovies
        }
        deleteMovie={deleteMovie} 
        />
      }
      
    </section>
  </div>;
}

export default App;
