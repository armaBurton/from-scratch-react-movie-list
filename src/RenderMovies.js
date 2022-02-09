import CurrentMovie from './CurrentMovie';

export default function RenderMovies({ movies, deleteMovie }){
  
  return <>
    {
      movies.map((movie, i) => <CurrentMovie key={movie + i} movie={movie} deleteMovie={deleteMovie}/>)
    }
  </>;
}