import styles from './Header.module.css';
import { showFiltersPage } from '../../features/filters/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filtersData } from '../../features/filters/filtersSlice';
import Lottie from "lottie-react";
import modeSwitcher from "../../lotties/mode.json";
import { useRef, useEffect } from 'react';
import { setToggler } from '../../utils/theme';



export default function Header(){
    

    const dispatch = useDispatch();
    const filters = useSelector(filtersData);
    const lottieRef = useRef();

    useEffect( () => { setToggler(lottieRef, false) }, [] )

    const handleClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(showFiltersPage());   
    }


    const switchStyle = {
        maxHeight: '3rem'
    }

    return(
        <div className={styles.header}>
            <Lottie 
            animationData={modeSwitcher} 
            lottieRef={lottieRef}
            loop={false}
            style={switchStyle}
            autoplay={false}
            onClick={() => {setToggler(lottieRef, true)}}
            />
            <button className={`btn ${styles.filtersBtn}`} onClick={handleClick} disabled={!Object.keys(filters).length}>Filters</button>
        </div> 
    )
}