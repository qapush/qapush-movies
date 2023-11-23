import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { moviesData, moviesLoading } from '../../features/movies/moviesSlice';
import { fetchMovies } from '../../features/movies/moviesSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';


export default function MoviePage() {

  const { movieId } = useParams();
  const movies = useSelector(moviesData);
  const moviesLoad = useSelector(moviesData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(movies).length) {
      dispatch(fetchMovies())
    }
  }, [])
  
  if (!Object.keys(movies).length) {
    return <div style={ {height: '100dvh', display: 'flex', justifyContent: 'center'}}>
    <Loader />
  </div>
  }

  if (Object.keys(movies).length && !movies[movieId]) {
    return <NotFound/>
  }


  return (
    <div>{movies[movieId].title}</div>
  )
}
