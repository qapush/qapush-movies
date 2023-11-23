import React from 'react'
import Lottie from "lottie-react";
import loadingAnimation from "../../lotties/loading.json";


export default function Loader() {

const loadingStyle = {
    width: '100%',
    maxWidth: '200px',
    margin: 'auto'
}
    
  return (
    <Lottie animationData={loadingAnimation} style={loadingStyle} />
  )
}
