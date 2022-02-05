import CurrentMovie from './CurrentMovie';

export default function RenderMovies(props){
  const deleteMovie = props.deleteMovie;
  console.log(props);
  return <>
    {
      props.movies.map((movie, i) => <CurrentMovie key={movie + i} movie={movie} deleteMovie={deleteMovie}/>)
    }
  </>;
}