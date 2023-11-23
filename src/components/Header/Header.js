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
        <div className={styles.header}>
            <button className='btn' onClick={handleClick} disabled={!Object.keys(filters).length}>Filters</button>
        </div> 
    )
}