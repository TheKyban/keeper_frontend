import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/student.png'

function Home() {
  return (
    <div className="home">

      <div className="homeText">
        <h1 data-be={"Keeper"}>Keeper</h1>
        <p>Manage your daily tasks and work flow in a modern way!!</p>
        <button><Link to={'/login'}>Start Writing...</Link></button>
      </div>

      <div className="homeImage">
        <img src={Image} alt="Image" />
      </div>
    </div>
  )
}

export default Home