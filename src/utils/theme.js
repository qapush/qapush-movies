const root = document.querySelector("body");
const localTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

export const setToggler = ({ current: toggler }, play = false) => {
  
    if(!play){
        switch (localTheme) {
            case "light":
              setLight(toggler);
              break;
            case "dark":
              setDark(toggler);
              break;
            default:
              break;
          }
    } else if(play){
        console.log('play');
        switch (localStorage.getItem("theme")) {
            case "light":
              setDark(toggler, play);
              break;
            case "dark":
              setLight(toggler, play);
              break;
            default:
              break;
          }
    }
   
};

export const setThemeAuto = () => {
  const theme = localTheme || systemTheme;

  switch (theme) {
    case "light":
      root.classList.remove("darkmode");
      localStorage.setItem("theme", "light");
      break;
    case "dark":
      root.classList.add("darkmode");
      localStorage.setItem("theme", "dark");
      break;
    default:
      break;
  }
};

function setDark(toggler, play) {
  toggler.goToAndStop(0, true);
  root.classList.add("darkmode");
  localStorage.setItem("theme", "dark");
  if (play) {
    toggler.setDirection(-1);
    toggler.goToAndPlay(80, true);
  }
}

function setLight(toggler, play) {
  toggler.goToAndStop(134, true);
  root.classList.remove("darkmode");
  localStorage.setItem("theme", "light");
  if (play) {
    toggler.setDirection(1);
    toggler.goToAndPlay(50, true);
  }
}
