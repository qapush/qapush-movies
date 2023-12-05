import styles from "./Header.module.css";

import Lottie from "lottie-react";
import modeSwitcher from "../../lotties/mode.json";
import { useRef, useEffect } from "react";
import { setToggler } from "../../utils/theme";
import { useMatches } from "react-router-dom";


export default function Header() {
  
  const lottieRef = useRef();
  const matches = useMatches();
  const button = matches.filter( (match) => Boolean(match.handle?.button) )[0]?.handle.button() || null;

  useEffect(() => {
    setToggler(lottieRef, false);
  }, []);

  

  const switchStyle = {
    maxHeight: "3rem",
    maxWidth: "3rem",
  };

  return (
    <div className={styles.header}>
      <Lottie
        animationData={modeSwitcher}
        lottieRef={lottieRef}
        loop={false}
        style={switchStyle}
        autoplay={false}
        onClick={() => {
          setToggler(lottieRef, true);
        }}
      />
      {button}
    </div>
   
  );
}
