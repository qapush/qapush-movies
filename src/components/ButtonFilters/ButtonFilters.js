import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showFiltersPage, filtersData } from '../../features/filters/filtersSlice';
import styles from "./ButtonFilters.module.css";



export default function ButtonFilters() {

    const dispatch = useDispatch();
    const filters = useSelector(filtersData);

    const handleClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(showFiltersPage());   
    }
  return (
    <button className={`btn ${styles.filtersBtn}`} onClick={handleClick} disabled={!Object.keys(filters).length}>Filters</button>
  )
}
