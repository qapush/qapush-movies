import styles from './Header.module.css';
import { loadMovies } from '../../features/movies/moviesSlice';
import { useDispatch } from 'react-redux';
export default function Header(){
    const dispatch = useDispatch();
    const handleClick = () => { 
        dispatch(loadMovies());
    }
    
    return(
        <div className={styles.header}>
            <button className='btn' onClick={handleClick}>Filters</button>
        </div>
    )
}