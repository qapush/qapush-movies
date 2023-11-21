import styles from './Header.module.css';
import { showFiltersPage } from '../../features/filters/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filtersData } from '../../features/filters/filtersSlice';

export default function Header(){

    const dispatch = useDispatch();
    const filters = useSelector(filtersData);

    const handleClick = () => {
        if(Object.keys(filters).length){
            document.body.style.overflow = 'hidden';
            dispatch(showFiltersPage());
        }
        
    }
    
    return(
        <div className={styles.header}>
            <button className='btn' onClick={handleClick}>Filters</button>
        </div> 
    )
}