import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { setThemeAuto } from '../../utils/theme';


export default function Wrapper() {

  useEffect(() => {
    setThemeAuto();
  }, [])

  return (
    <div id='wrapper'>
        <Outlet/>
    </div>
  )
}
