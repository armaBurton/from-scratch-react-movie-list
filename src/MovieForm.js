export default function MovieForm(props){
  console.log(props);

  return <form>
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
      <select onChange={e => props.setMovieFormColor(e.target.value)}>
        <option value='hotpink'>hotpink</option>
        <option value='red'>red</option>
        <option value='cyan'>cyan</option>
        <option value='chartreuse'>chartreuse</option>
        <option value='orange'>orange</option>
        <option value='blue'>blue</option>
      </select>
    </label>
  </form>;
}