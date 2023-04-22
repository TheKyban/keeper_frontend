import React from 'react'
import logo from "../assets/keeperLogo.png"

function Header() {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="Logo" />
            <h1>Keeper</h1>
        </div>
    </nav>
  )
}

export default Header