import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { setThemeAuto } from '../../utils/theme';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import styles from './Wrapper.module.css';



export default function Wrapper() {

  useEffect(() => {

    setThemeAuto();
  }, [])

  return (
    <div className={styles.wrapper}>
        <Header />
        <Outlet/>
        <div className={styles.footer}>
          <Link to="/recommend">recommend movie or serial</Link>
        </div>
    </div>
  )
}
