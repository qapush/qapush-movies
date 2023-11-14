import styles from './Filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideFiltersPage, filtersData, toggleFilter, selectedFiltersData, clearFilters } from '../../features/filters/filtersSlice';



export default function Filters() {
    
    const dispatch = useDispatch();
    const filters = useSelector(filtersData);
    const selectedFilters = useSelector(selectedFiltersData);
    const handleClose = () => {
        dispatch(hideFiltersPage())
    }



    const hadleClick = (id) => {
        
        dispatch(toggleFilter(id))
    }

    const handleClear = (id) => {
        dispatch(clearFilters())

    }

    const filtersButtons = Object.keys(filters).map(filterId => {
        let cssClass = styles.filter_button;
        if (selectedFilters.includes(filterId)) cssClass += ` ${styles.active}`;
        return <button
                    className={cssClass}
                    key={filterId}
                    onClick={() => hadleClick(filterId)}
                    >
                    {filters[filterId].name}
                </button>
    })
    
    
    
    return (
        <div className={styles.filters}>
            <div className={styles.filters_header}>
                <button className={styles.filters_close} onClick={handleClose}>X</button>
            </div>
            <div className={styles.filters_buttons}>
            <h2>Filters</h2>
                {filtersButtons}
            </div>
            <div className={styles.clear_all}> 
                <button
                    className={styles.clear_button}
                        onClick={handleClear}
                        >
                        Clear all
                </button>
                <button
                        className={styles.apply_button}
                        onClick={handleClose}
                        >
                        Apply
                </button>
                </div>
        </div>
    )
}