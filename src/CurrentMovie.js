export default function CurrentMovie(props){

  return <div className='current-movie-card' style={{ backgroundColor: props.movie.color }}>
    <h2>{props.movie.title}</h2>
    {
      props.movie.director ? <p>{props.movie.director}, {props.movie.year}</p> : ''
    }
  </div>;
}