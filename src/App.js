import './App.css';
import { useStateForm } from './useStateForm';
import CurrentMovie from './CurrentMovie';
import MovieForm from './MovieForm';
import RenderMovies from './RenderMovies';
import { useState, useEffect } from 'react';

function App() {

  const {
    finishedCard, setFinishedCard,
    movieFormYearReleased, setMovieFormYearReleased,
    movieFormDirector, setMovieFormDirector,
    movieFormTitle, setMovieFormTitle,
    movieFormColor, setMovieFormColor,
  } = useStateForm();

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');

  function addMovie(newMovie){
    const updateMovies = [...allMovies, newMovie];
    setAllMovies(updateMovies);
  }

  function deleteMovie(id){
    const index = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);

    setCurrentFilter('');
  }

  // function handleFilteredMovies(search){
  //   const filteredMovies = allMovies.filter(movie => movie.title.includes(search));

  //   setFilteredMovies(filteredMovies);
  // }

  useEffect(() => {
    const filtered = allMovies.filter(movie => movie.title.includes(currentFilter)
    || movie.director.includes(currentFilter)
    || movie.year.includes(currentFilter));

    setFilteredMovies(filtered);
  }, [currentFilter, allMovies]);

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
      /> : ''}
    </section>
    <section className='filter-section'>
      <h2>Filter Movies</h2>
      <input value={currentFilter} onChange={(e) => setCurrentFilter(e.target.value)} />
      {/* <input onChange={(e) => handleFilteredMovies(e.target.value)} /> */}
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
