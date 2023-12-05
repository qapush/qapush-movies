import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { setThemeAuto } from '../../utils/theme';
import Header from '../Header/Header';


export default function Wrapper() {

  useEffect(() => {

    setThemeAuto();
  }, [])

  return (
    <div id='wrapper'>
        <Header />
        <Outlet/>
    </div>
  )
}
