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

    const hadleClick = (e, id) => {
        console.log(e.target.focus());
        e.target.blur();
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
                    onClick={(e) => hadleClick(e, filterId)}
                    >
                    {filters[filterId].name}
                </button>
    })
    
   
    
    return (
        <div className={styles.filters}>
            <div className={styles.filters_header}>
                <h2>Filters</h2>
                <button className={styles.filters_close} onClick={handleClose}>X</button>
            </div>
            <div className={styles.filters_buttons}>
                {filtersButtons}
            </div>
            <div className={styles.clear_all}> 
                <button
                    className={styles.clear_button}
                        onClick={handleClear}
                        >
                        Clear all
                    </button>
                </div>
        </div>
    )
}