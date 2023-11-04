import styles from './Header.module.css';

export default function Header(){

    const handleClick = () => { 
    
    }
    
    return(
        <div className={styles.header}>
            <button className='btn' onClick={handleClick}>Filters</button>
        </div>
    )
}