const root = document.querySelector('body');

const getTheme = () => {
  const localTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return localTheme || systemTheme;
}

export const setToggler = ({ current: toggler }, play) => {

  const theme = getTheme();

  if (play !== true) {
    switch (theme) {
      case 'light':
        setLight(toggler);
        break;
      case 'dark':
        setDark(toggler);
        break;
      default:
        break;
    }
  } else if (play === true) {
    switch (theme) {
      case 'light':
        setDark(toggler, play);
        break;
      case 'dark':
        setLight(toggler, play);
        break;
      default:
        break;
    }
  }
};

export const setThemeAuto = () => {

   const theme = getTheme(); 

  switch (theme) {
    case 'light':
      localStorage.setItem('theme', 'light');
      break;
    case 'dark':
      root.classList.add('darkmode');
      localStorage.setItem('theme', 'dark');
      break;
    default:
      break;
  }
};


function setDark(toggler, play) {
  toggler.goToAndStop(0, true);
  root.classList.add('darkmode');
  localStorage.setItem('theme', 'dark');
  if (play) {
    toggler.setDirection(-1);
    toggler.goToAndPlay(80, true);
  }
}

function setLight(toggler, play) {
  toggler.goToAndStop(134, true);
  root.classList.remove('darkmode');
  localStorage.setItem('theme', 'light');
  if (play) {
    toggler.setDirection(1);
    toggler.goToAndPlay(50, true);
  }
}
