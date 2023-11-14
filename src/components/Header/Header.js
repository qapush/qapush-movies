import styles from './Header.module.css';
import { showFiltersPage } from '../../features/filters/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filtersData } from '../../features/filters/filtersSlice';

export default function Header(){

    const dispatch = useDispatch();
    const filters = useSelector(filtersData);

    const handleClick = () => { 
        document.body.style.overflow = 'hidden';
        dispatch(showFiltersPage());
    }
    
    return(
        Object.keys(filters).length > 0 ? <div className={styles.header}>
            <button className='btn' onClick={handleClick}>Filters</button>
        </div> : null
    )
}