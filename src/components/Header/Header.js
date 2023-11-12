import styles from './Header.module.css';
import { showFiltersPage } from '../../features/filters/filtersSlice';
import { useDispatch } from 'react-redux';

export default function Header(){

    const dispatch = useDispatch();

    const handleClick = () => { 
        dispatch(showFiltersPage());
    }
    
    return(
        <div className={styles.header}>
            <button className='btn' onClick={handleClick}>Filters</button>
        </div>
    )
}