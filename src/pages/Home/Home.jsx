import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
  const fn = (e)=>{
    console.log(e.target.value);
    navigate(e.target.value)
  }
  return (
    <div>
      <select onChange={fn}>
      <option value="/kompyuter">Kompyuter</option>
      <option value="/kompyuter">Kompyuter</option>
      <option value="/kompyuter">Kompyuter</option>
      </select>
    </div>
  )
}

export default Home
