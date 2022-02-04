export default function MovieForm(props){
  console.log(props);


  function handleSubmit(e){
    e.preventDefault();

    const movie = {
      title: props.movieFormTitle,
      director: props.movieFormDirector,
      year: props.movieFormYearReleased,
      color: props.movieFormColor,
    };

    props.addMovie(movie);

    props.setMovieFormTitle(``);
    props.setMovieFormDirector(``);
    props.setMovieFormYearReleased(``);
    props.setMovieFormColor(`transparent`);
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Title
      <input required value={props.movieFormTitle} onChange={e => props.setMovieFormTitle(e.target.value)} />
    </label>
    <label>
      Director:
      <input required value={props.movieFormDirector} onChange={e => props.setMovieFormDirector(e.target.value)} />
    </label>
    <label>
      Year Released:
      <input type='number' required value={props.movieFormYearReleased} onChange={e => props.setMovieFormYearReleased(e.target.value)} />
    </label>
    <label>
      Color:
      <select value={props.movieFormColor} onChange={e => props.setMovieFormColor(e.target.value)}>
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