import React from 'react'
import Lottie from "lottie-react";
import emptyAnimation from "../../lotties/empty.json";

export default function NotFound({message}) {

const emptyStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-center',
    justifyContent: 'center',
    zIndex: 0
}
    
const emptyLottieStyle = {
    maxWidth: '300px',
    margin: '0 auto'
  }
    
  return (
    <div style={emptyStyle}>
          <Lottie animationData={emptyAnimation} style={emptyLottieStyle} />
          {message}
    </div>
  )
}
