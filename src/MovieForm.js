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
  </form>;
}