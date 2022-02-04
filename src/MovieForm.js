// import { useEffect } from 'react';

export default function MovieForm({
  movieFormYearReleased,
  setMovieFormYearReleased,
  movieFormDirector,
  setMovieFormDirector,
  movieFormTitle,
  setMovieFormTitle,
  movieFormColor, 
  setMovieFormColor,
  finishedCard,
  setFinishedCard,
  addMovie,
  // deleteMovie,
  
}){
  
  function handleSubmit(){

    const id = `${movieFormTitle + movieFormDirector + movieFormYearReleased + movieFormColor + Math.floor(Math.random() * 9999)}`;
    const movie = {
      title: movieFormTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor,
      card: finishedCard,
      id: id
    };
    
    addMovie(movie);
    
    setMovieFormTitle(``);
    setMovieFormDirector(``);
    setMovieFormYearReleased(``);
    setMovieFormColor(`transparent`);
    setFinishedCard(false);
  }

  // useEffect(() => {
  //   finishedCard && handleSubmit();
    
  // }, [finishedCard]);

  function setTrue(e){
    e.preventDefault();
    setFinishedCard(true);
    handleSubmit();
  }

  return <form onSubmit={setTrue}>
    <label>
      Title
      <input required value={movieFormTitle} onChange={e => setMovieFormTitle(e.target.value)} />
    </label>
    <label>
      Director:
      <input required value={movieFormDirector} onChange={e => setMovieFormDirector(e.target.value)} />
    </label>
    <label>
      Year Released:
      <input type='number' required value={movieFormYearReleased} onChange={e => setMovieFormYearReleased(e.target.value)} />
    </label>
    <label>
      Color:
      <select value={movieFormColor} onChange={e => setMovieFormColor(e.target.value)}>
        <option value='transparent'></option>
        <option value='hotpink'>Hotpink</option>
        <option value='red'>Red</option>
        <option value='cyan'>Cyan</option>
        <option value='chartreuse'>Chartreuse</option>
        <option value='orange'>Orange</option>
        <option value='blue'>Blue</option>
      </select>
      <button className='add-movie'>Add Movie</button>
    </label>
  </form>;
}