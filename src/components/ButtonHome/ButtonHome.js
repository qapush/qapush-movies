import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ButtonHome() {

  const navigate = useNavigate();

  return (
    <button className={`btn`} onClick={() => navigate('/')}>Home</button>
  )
}
  